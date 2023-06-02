import { Unidades } from "../models/modelUnidades";

const form = async (body) => {

    let { abreviacao, descricao } = body;

    if (!abreviacao) {
        return { is_valid: false, message: 'Abreviação é obrigatório' }
    }
    if (!descricao) {
        return { is_valid: false, message: 'Descrição é obrigatório' }
    }
    
    const resp = await Unidades.sp_unidades(abreviacao, descricao)

    return { is_valid: true, message: resp.Msg }

}

export default form;