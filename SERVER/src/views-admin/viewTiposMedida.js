import modelUnidades from '../models/modelUnidades';
import DAO from '../tools/DAO';

const view = async (req, res) => {

    const data = await DAO.filter(
        modelUnidades,
        {},
        ['id', 'descricao']
    );

    res.status(200).json({ data: data });
};

export default view;