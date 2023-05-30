import { Unidades } from "../models/modelUnidades";

const form = async (body) => {

    let { descricao } = body;

    if (!descricao) {
        return { is_valid: false, message: 'Descrição é obrigatório' }
    }

    const resp = await Unidades.sp_unidades(id, descricao, id_status)

    return { is_valid: true, message: resp.Msg }

}

export default form;