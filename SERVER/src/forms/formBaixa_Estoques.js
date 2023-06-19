import { Baixa_Estoques } from "../models/modelBaixa_Estoques";


const form = async (body) => {

    let { id_produto, lote, validade, quantidade, motivo, observacao } = body;

    if (!id_produto || !lote || !validade || !quantidade || !motivo || !observacao) {
        return { is_valid: false, message: 'Dados Obrigatórios' }
    }

    const resp = await Baixa_Estoques.sp_baixa_estoque(Number(id_produto), lote, validade, Number(quantidade), motivo, observacao);

    return { is_valid: true, message: resp.Msg }

}

export default form;