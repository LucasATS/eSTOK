import DAO from "../tools/DAO";

const FormularioVenda = async (body, is_user) => {

    //CAPTURA BODY
    const { produtos, comprador, total } = body;

    // CAPTURA ENTRADAS COMPRADOR
    const {
        nome, email ,telefone ,endereco ,bairro, 
        uf, cidade ,nome_cartao, numero_cartao , 
        dt_vencimento, cvv_e
    } = comprador;

    // VERIFICA TOTAIS

    try{
        let valor_total = 0;
        for (const produto of produtos){
            if (Number(produto.total) != (Number(produto.quantidade) * Number(produto.preco))){
                return { is_valid: false, message: 'Valor total de 1 ou mais produtos estão incorretos' }
            }
            valor_total += Number(produto.total);
        }
        if (valor_total != Number(total)){
            return { is_valid: false, message: 'Valor total da venda está incorreto' }
        }

    }catch (error) {
        return { is_valid: false, message: 'Dados obrigatórios' }
    }

    if (
        !nome || !email || !telefone || !endereco || !bairro || 
        !uf || !cidade || !nome_cartao || !numero_cartao || 
        !dt_vencimento || !cvv_e
    ) { return { is_valid: false, message: 'Dados obrigatórios' } }

    const resp = await DAO.venda(comprador, produtos, is_user)

    if ( resp.is_valid == true ){
        return { is_valid: true, 
            message: (!is_user)? "Compra realizada com sucesso!" : resp.Msg
        }
    } else {
        return { is_valid: false, message: resp.Msg}
    }

}

export default FormularioVenda;