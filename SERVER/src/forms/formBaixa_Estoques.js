import { Baixa_Estoques } from "../models/modelBaixa_Estoques";


const form = async (body) => {

    let { id_produto, lote, validade, quantidade, unitario, total, motivo, observacao } = body;

    if (!id_produto || !lote || !validade || !quantidade || !unitario || !total || !motivo ) {
        return { is_valid: false, message: 'Dados Obrigatórios' }
    }

    if ((quantidade * unitario) != Number(total)) {
        return { is_valid: false, message: 'Valor Total está incorreto, por favor informe o total correto!' }
    }

    const resp = await Baixa_Estoques.sp_baixa_estoque(Number(id_produto), lote, validade, Number(quantidade), Number(unitario), Number(total), motivo, observacao);

    return { is_valid: true, message: resp.Msg }

}

export default form;