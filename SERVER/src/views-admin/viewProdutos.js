import { Produtos } from '../models/modelProdutos';

const view = async (req, res) => {

    const {Inicial, Quantidade} = req.body;
    const data = await Produtos.vw_produtos(Inicial, Quantidade);

    res.status(200).json({ data: data });

};

export default view;
