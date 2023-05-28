import { Categorias } from '../models/modelCategorias';
import DAO from '../tools/DAO';

const view = async (req, res) => {
    
    const data = await DAO.filter(
        Categorias, 
        {}, 
        ['id', 'descricao']
    );

    res.status(200).json({data : data});
};

export default view;