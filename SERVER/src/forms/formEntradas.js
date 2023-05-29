import { Entradas } from "../models/modelEntradas";

const form = async (body) => {

    let { id_produto, quantidade, unitario, total, validade, lote, data_compra } = body;

    if (!id_produto, !quantidade, !unitario, !total, !validade, !lote, !data_compra) {
        return { is_valid: false, message: 'Dados Obrigatórios' }
    }

    const resp = await Entradas.sp_entradas(id_produto, quantidade, unitario, total, validade, lote, data_compra)

    return { is_valid: true, message: resp.Msg }

}

export default form;