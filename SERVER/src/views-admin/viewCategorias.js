import modelCategoria from '../models/modalCategoria';
import DAO from '../tools/DAO';

const view = async (req, res) => {
    
    const data = await DAO.filter(
        modelCategoria, 
        {}, 
        ['id', 'descricao']
    );

    res.status(200).json({data : data});
};

export default view;