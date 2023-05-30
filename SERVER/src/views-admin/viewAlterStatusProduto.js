// Ativa ou desativa Produto
import { Produtos } from '../models/modelProdutos';
import DAO from '../tools/DAO';

const view = async (req, res) => {
    let {id_produto, id_status} = req.body
    let data= DAO.save(Produtos, {id_status: id_status, id: id_produto })
    if (data) {
        res.status(200).json({data : 'Status do produto atualizado com sucesso.'});
    }
};

export default view;