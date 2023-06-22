import { DataTypes, QueryTypes } from 'sequelize';
import db from '../settings/db';

export class Vendas {
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
            let data = await db.query(
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
                    if ( Number(prod.preco) != Number(lote.preco) ){
                        return {is_valid: false, Msg: `Tentativa de venda do produto ${lote.nome} com preço incorreto!`}
                    }
                    if ( qtd_requisitada == 0 ){
                        break;
                    } else if (Number(lote.qtd) >= qtd_requisitada){
                        lotes.push([lote.lote, qtd_requisitada]);
                        qtd_requisitada = 0;
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
        
        const transaction = await db.transaction();
        try {
            
            let data_id = await db.query(sql,
                {
                    types: QueryTypes.RAW, 
                    replacements: replacements_venda_cabecalho,
                    transaction: transaction,
                    raw: true
                }
            );
            
            const id_venda = data_id[0].id_venda;
            
            sql = "CALL sp_vendas_itens(\n\t?,\n\t?,\n\t?,\n\t?,\n\t?,\n\t?,\n\t?)\n;";
            
            for (const p of _produtos){
                let replacements_vendas_itens = [
                    id_venda,
                    kar_tipo,
                    p.id,
                    p.qtd,
                    p.lote,
                    p.preco,
                    p.total
                ];

                console.log(sql);
                console.log(replacements_vendas_itens);

                await db.query(sql,
                    {
                        types: QueryTypes.RAW, 
                        replacements: replacements_vendas_itens,
                        transaction: transaction,
                        raw: true
                    }
                );
            }
            
            await transaction.commit();
            
            return {is_valid: true, Msg: `Venda realizada com sucesso!`}

        } catch (error) {
            console.log(error);
            await transaction.rollback();
            
            return {is_valid: false, Msg: `Ocorreu um erro inesperado`}
        
        }
        
    }

    static vw_vendas_consolidado = async ( date_de, date_ate, tipo_produto ) => {

        const data = await db.query(
            "SELECT ....",
            {
              type: QueryTypes.SELECT,
              replacements: [posIni, Quantidade]
            }
          );
          return data;

    }

    static vw_vendas_administrador = async ( date_de, date_ate, tipo_produto ) => {

        const data = await db.query(
            "SELECT ....",
            {
              type: QueryTypes.SELECT,
              replacements: [posIni, Quantidade]
            }
          );
          return data;

    }

    static vw_vendas_cliente = async ( date_de, date_ate, tipo_produto ) => {

        const data = await db.query(
            "SELECT ....",
            {
              type: QueryTypes.SELECT,
              replacements: [posIni, Quantidade]
            }
          );
          return data;

    }

    static vw_vendas = async ( posIni, Quantidade ) => {

        const data = await db.query(
            "SELECT * FROM vw_vendas LIMIT ?, ?",
            {
              type: QueryTypes.SELECT,
              replacements: [posIni, Quantidade]
            }
          );
          return data;
    }

    static total_cadastro = async () => {

        const data = await db.query(
            "SELECT COUNT(ID) as total FROM vw_vendas;",
            {
              type: QueryTypes.SELECT,
            }
          );
          return data[0].total;
    }

}