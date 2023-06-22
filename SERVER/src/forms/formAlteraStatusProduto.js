import DAO from "../tools/DAO";
import { Produtos } from "../models/modelProdutos";

const form = async (body) => {

    let strs = ['Inativado', 'Ativado'];

    let { id_produto, ativar } = body;

    if (!id_produto) {
        return { is_valid: false, message: 'Descrição é obrigatório' }
    }

    return DAO.atualizaStatus(Produtos, id_produto, eval(ativar))
        .then(() => {
            return { is_valid: true, message: "Produto " + strs[(eval(ativar)? 1 : 0)] + " com sucesso!"}
        })
        .catch(() => {
            return { is_valid: false, message:"Ocorreu um erro inesperado!"}
        });

}

export default form;