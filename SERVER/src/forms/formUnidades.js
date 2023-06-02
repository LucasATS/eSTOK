import { Unidades } from "../models/modelUnidades";

const form = async (body) => {

    let { id, descricao } = body;

    if (!descricao) {
        return { is_valid: false, message: 'Descrição é obrigatório' }
    }

    const resp = await Unidades.sp_unidades(id, descricao)

    return { is_valid: true, message: resp.Msg }

}

export default form;