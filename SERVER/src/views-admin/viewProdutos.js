import { Produtos } from '../models/modelProdutos';

const view = async (req, res) => {

    const data = await Produtos.vw_produtos();

    res.status(200).json({ data: data });

};

export default view;
