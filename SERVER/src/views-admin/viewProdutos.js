import { Produtos } from '../models/modelProdutos';
import DAO from '../tools/DAO';

const view = async (req, res) => {

    const data = await DAO.filter(
        Produtos,
        {},
        ['Nome', 'Descricao', 'Foto', 'id_id_unidade', 'id_categoria', 'id_tp_produto', 'fungibilidade', 'estocavel', 'id_status']
    );

    res.status(200).json({ data: data });
};

export default view;