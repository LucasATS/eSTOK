import { Estoques } from '../models/modelEstoques';

const view = async (req, res) => {
    const data = await Estoques.vw_entradas_cadastro();

    res.status(200).json({ data: data });

    console.log(data);
};

export default view;