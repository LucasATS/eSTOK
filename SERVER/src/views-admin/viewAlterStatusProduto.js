// Ativa ou desativa Produto
import modelProduto from '../models/modelProduto';
import DAO from '../tools/DAO';

const view = async (req, res) => {
    let produto = req.body
    let data= DAO.save(modelProduto, produto)
    if (data) {
        res.status(200).json({data : 'Produto atualizado com sucesso.'});
    }
};

export default view;