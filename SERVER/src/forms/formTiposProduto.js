import { Tipo_Produtos } from "../models/modelTipo_Produtos";

const form = async (body) => {

    let { descricao } = body;

    if (!descricao) {
        return { is_valid: false, message: 'Descrição é obrigatório' }
    }

    const resp = await Tipo_Produtos.sp_unidades(descricao, id_status)

    return { is_valid: true, message: resp.Msg }

}

export default form;