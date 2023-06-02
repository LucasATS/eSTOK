import { Tipo_Produtos } from '../models/modelTipo_Produtos';

const view = async (req, res) => {

    const data = await Tipo_Produtos.vw_tipo_produto("Ativo");

    res.status(200).json({ data: data });

    console.log(data);
};

export default view;