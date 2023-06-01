import modelProduto, { Produtos } from "../models/modelProdutos";

const FormularioProduto = async (body) => {

    console.log(body);
    let { nome, descricao, id_categoria, id_tp_produto, id_unidade, foto, fungibilidade, estocavel, id_status } = body;


    if (!nome) {
        return { is_valid: false, message: 'Nome é obrigatório' }
    }

    if (!descricao) {
        return { is_valid: false, message: 'Descrição é obrigatório' }
    }

    const resp = await Produtos.sp_produtos(nome, descricao, id_categoria, id_tp_produto, id_unidade, foto, fungibilidade, estocavel, id_status)
    
    return { is_valid: true, message: resp.Msg }

}

export default FormularioProduto;