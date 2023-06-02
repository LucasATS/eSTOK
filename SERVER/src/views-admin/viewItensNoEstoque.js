import { Estoques } from "../models/modelEstoques";

const view = async (req, res) => {

    const data = await Estoques.vw_estoque_por_lotes();

    res.status(200).json({ data: data });
};

export default view;