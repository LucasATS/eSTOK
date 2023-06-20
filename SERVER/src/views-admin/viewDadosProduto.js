import { Produtos } from '../models/modelProdutos';
import DAO from '../tools/DAO';

const view = async (req, res) => {
    let { id } = req.query;

    let data = await DAO.get(Produtos, { id } )
    if (data) {
        res.status(200).json({ data: data });
    }else {
        res.status(404).json({ data: 'Produto não localizado' });
    }
};

export default view;