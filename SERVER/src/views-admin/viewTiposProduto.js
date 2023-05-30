import { Tipo_Produtos } from '../models/modelTipo_Produtos';
import DAO from '../tools/DAO';

const view = async (req, res) => {

    const data = await DAO.filter(
        Tipo_Produtos,
        {},
        ['id', 'descricao']
    );

    res.status(200).json({ data: data });
};

export default view;