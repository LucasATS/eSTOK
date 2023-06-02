import { Produtos } from "../models/modelProdutos";

const FormularioProduto = async (body) => {

    let { nome, descricao, id_categoria, id_tp_produto, id_unidade, foto, fungibilidade, estocavel } = body;


    if (!nome) {
        return { is_valid: false, message: 'Nome é obrigatório' }
    }

    if (!descricao) {
        return { is_valid: false, message: 'Descrição é obrigatório' }
    }

    let fungibilidade_e = fungibilidade ? 1 : 0;
    let estocavel_e = estocavel ? 1 : 0;

    const resp = await Produtos.sp_produtos(nome, descricao, id_categoria, id_tp_produto, id_unidade, foto, fungibilidade_e, estocavel_e)
    
    return { is_valid: true, message: resp.Msg }

}

export default FormularioProduto;