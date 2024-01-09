import { Entradas } from "../models/modelEntradas";

const form = async (body) => {

    let { id_produto, quantidade, unitario, validade, lote, data_compra } = body;

    if (!id_produto || !quantidade || !unitario || !validade || !lote || !data_compra) {
        return { is_valid: false, message: 'Dados Obrigatórios' }
    }

    const total = (quantidade * unitario);

    const resp = await Entradas.sp_entradas(Number(id_produto), Number(quantidade), Number(unitario), Number(total), validade, lote, data_compra)

    return { is_valid: true, message: resp.Msg }

}

export default form;