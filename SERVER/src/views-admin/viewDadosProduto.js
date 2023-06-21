import { Produtos } from '../models/modelProdutos';
import DAO from '../tools/DAO';

const view = async (req, res) => {

    try {
            
        let { id } = req.query;

        let data = await DAO.get(Produtos, { id } )
        if (data) {
            res.status(200).json({ data: data });
        }else {
            res.status(404).json({ data: 'Produto não localizado' });
        }


    } catch (error) {
        
        if (req.status_debug){
            res.status(400).json({ error: error });
        } else {
            res.status(400).json({ error: 'Erro inesperado' });
        }

    }
    
};

export default view;