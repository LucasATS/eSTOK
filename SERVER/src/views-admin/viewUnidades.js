import { Unidades } from "../models/modelUnidades";

const view = async (req, res) => {

    const data = await Unidades.vw_unidades("Ativo");

    res.status(200).json({ data: data });

};

export default view;