import { Baixa_Estoques } from "../models/modelBaixa_Estoques";


const view = async (req, res) => {

    const data = await Baixa_Estoques.vw_baixa_estoques();

    res.status(200).json({ data: data });
};

export default view;