import modelProduto from '../models/modelProduto';
import DAO from '../tools/DAO';

const view = async (req, res) => {
    let id = req.body
    let data = DAO.get (modelProduto, {id:id})
    if (data) res.status(200).json({ data: data });
};

export default view;