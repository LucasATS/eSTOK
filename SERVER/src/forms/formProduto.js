import modelProduto, { Produtos } from "../models/modelProdutos";

const FormularioProduto = async (body) => {

    let { Nome, Descricao } = body;

    if (!Nome) {
        return { is_valid: false, message: 'Nome é obrigatório' }
    }

    if (!Descricao) {
        return { is_valid: false, message: 'Descrição é obrigatório' }
    }

    let produto = await modelProduto.findOne({
        where: {
            Nome: Nome
        }
    })

    if(produto.dataValues != undefined){
        return { is_valid: false, message: 'Produto ja existe no estoque' }
    }

    const resp = await Produtos.sp_produtos(Descricao)

    return { is_valid: true, message: resp.Msg }

}

export default FormularioProduto;