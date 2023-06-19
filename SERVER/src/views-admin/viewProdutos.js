import { Produtos } from '../models/modelProdutos';

const view = async (req, res) => {

    const {Inicial, Quantidade} = req.query;
    
    const data = await Produtos.vw_produtos(
        (!Inicial)? 1 : Number(Inicial), 
        (!Quantidade)? 20 : Number(Quantidade)
    );

    res.status(200).json({ data: data });

};

export default view;
