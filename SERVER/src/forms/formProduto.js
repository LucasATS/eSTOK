import DAO from '../tools/DAO';
import modelProduto from "../models/modelProdutos";

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

    const resp = await DAO.save(modelProduto, body)

    if (resp == 'sucess') {
        return { is_valid: true, message: 'Produto cadastrado com sucesso!' }
    } else {
        return { is_valid: false, message: resp }
    }

}

export default FormularioProduto;