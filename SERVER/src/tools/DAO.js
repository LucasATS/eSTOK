import bancoDeDados from '../settings/db';
import { Op, QueryTypes } from 'sequelize';

class DAO {
    static get = async ( model , fields ) => {

        const data = await model.findOne({
            where: fields
        });
        
        return data;
        
    }

    static save = async ( model , fields ) => {
        
        //CAPTURA ID E REMOVE DE FIELDS
        const id = fields.id;
        delete fields.id;
        // SE NÃO HOUVER ID EXECUTA INSERT DO CONTRARIO UPDATE
        if ( !id ){

            //INSERT MODEL
            return model.create( fields ) 
                .then( () => { 
                    console.log(`Insert in ${model.name} realized!`); 
                    return 'success'; 
                }) 
                .catch((error) => { 
                    console.log(`Error in INSERT ${model.name} : ${error}`); 
                    return error; 
                }); 

         } else { 

            //UPDATE MODEL
            return model.update( 
                fields , 
                { where: { id: id } } 
            ) 
                .then( () => { 
                    console.log(`Update in ${model.name} realized!`); 
                    return "success"; 
                }) 
                .catch((error) => { 
                    console.log(`Error in UPDATE ${model.name} : ${error}`); 
                    return error; 
                }); 

         }
    }

    static filter = async ( model , fields, fieldsout = null ) => {
        
        const keys = Object.keys(fields);
        
        for (const key of keys) {
            fields[key] = {[Op.like] : `%${fields[key]}%`};
        }

        const conditions = {};

        if (keys.length > 0) conditions['where'] = fields;
        
        if (fieldsout != null){
            conditions['attributes'] = fieldsout;
        }

        const data = await model.findAll(conditions);

        return data
    }

    static all = async ( model , conditions = {} ) => {

        const data = await model.findAll(conditions);

        return data
    }

    static atualizaStatus = async (model, chave, Ativo = true) => {
        let strTabela = model.tableName;
        let id_status = Ativo ? 1 : 2;
        return await bancoDeDados.query(`UPDATE (${strTabela}) SET id_status = (?) WHERE id = (?)`, {
            replacements: [id_status, chave]
        })
    }
    static venda = async ( comprador, produtos, is_user ) => {

        const tp_venda = (is_user)? 0 : 1; //ADMINISTRADOR = 0; CLIENTE = 1
        const kar_tipo = 4; //STATUS VENDA FECHADA

        // CRIA QUERY
        let sql = ""//"SET @tipo_venda = ?;\nSET @kar_tipo = ?;\nSET @id_vendas = '';\n"
        sql += "CALL sp_vendas_cabecalho(";
        sql += "\n\t?,\n\t?,\n\t?,\n\t?,\n\t?,\n\t?,\n\t?,\n\t?,\n\t?,\n\t?,\n\t?,\n\t?,\n\t?\n);\n";
        //sql += "SELECT @id_venda AS 'id_venda';\n";
        

        // CRIA REPLACEMENTS VENDA CABEÇALHO
        const replacements_venda_cabecalho = [
            kar_tipo, comprador.nome, comprador.email, comprador.telefone, comprador.endereco, 
            comprador.bairro, comprador.uf, comprador.cidade, comprador.nome_cartao, 
            comprador.numero_cartao, comprador.dt_vencimento, comprador.cvv_e, tp_venda
        ]

        // CONSULTA ESTOQUE POR LOTE E PREÇO, E ENTAO VALIDA
        const _produtos = [];

        for (const prod of produtos){
            //SELECT * FROM vw_lotes
            let data = await bancoDeDados.query(
                "SELECT * FROM vw_estoque_lote_preco WHERE id = ? ORDER BY validade ASC",
                {
                    type: QueryTypes.SELECT,
                    replacements: [prod.id]
                }
            );
            
            if ( data.length > 0 ){
                let lotes = [];
                let qtd_requisitada = Number(prod.quantidade);
                console.log(`requisitou ${qtd_requisitada}`);
                for ( const lote of data ){
                    console.log(lote)
                    if ( Number(prod.preco) != Number(lote.preco) ){
                        return {is_valid: false, Msg: `Tentativa de venda do produto ${lote.nome} com preço incorreto!`}
                    }
                    if ( qtd_requisitada == 0 ){
                        break;
                    } else if (Number(lote.qtd) >= qtd_requisitada){
                        lotes.push([lote.lote, qtd_requisitada]);
                        qtd_requisitada -= Number(lote.qtd);
                        break;
                    } else {
                        lotes.push([lote.lote, Number(lote.qtd)]);
                        qtd_requisitada -= Number(lote.qtd);
                    }
                }
                if (qtd_requisitada == 0){
                    for ( const lote of lotes){
                        _produtos.push({
                            id: prod.id,
                            qtd: lote[1],
                            lote: lote[0],
                            preco: prod.preco,
                            total: prod.total,
                        })
                    }
                } else {
                    return {is_valid: false, Msg: `Produto ${data[0].nome} com saldo abaixo do solicitado!`}
                }
                
            } else {
                return {is_valid: false, Msg: `Um ou mais produtos com saldo zerado`}
            }
            
        }
        
        const transaction = await bancoDeDados.transaction();
        try {
            
            let data_id = await bancoDeDados.query(sql,
                {
                    types: QueryTypes.RAW, 
                    replacements: replacements_venda_cabecalho,
                    transaction: transaction,
                    raw: true
                }
            );
            
            const id_venda = data_id[0].id_venda;
            
            sql = '';
            const replacements_vendas_itens = [];
            
            for (const p of _produtos){
                sql += "CALL sp_vendas_itens(\n\t?,\n\t?,\n\t?,\n\t?,\n\t?,\n\t?,\n\t?)\n;";
                replacements_vendas_itens.push(...[
                    id_venda,
                    kar_tipo,
                    p.id,
                    p.qtd,
                    p.lote,
                    p.preco,
                    p.total
                ]);
            }

            await bancoDeDados.query(sql,
                {
                    types: QueryTypes.RAW, 
                    replacements: replacements_venda_cabecalho,
                    transaction: transaction,
                    raw: true
                }
            );
            
            console.log(sql);
            console.log(replacements_vendas_itens);
            
            await transaction.commit();
            
            return {is_valid: true, Msg: `Venda realizada com sucesso!`}

        } catch (error) {
            console.log(error);
            await transaction.rollback();
            
            return {is_valid: false, Msg: `Ocorreu um erro inesperado`}
        
        }
        
    }

}

export default DAO;