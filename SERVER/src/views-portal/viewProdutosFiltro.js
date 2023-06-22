import { Produtos } from '../models/modelProdutos';

const view = async (req, res) => {

    try {

        let { category, initial, limit} = req.query;
    
        let data = await Produtos.vw_produtos_cliente(category, initial, limit)
    
        return res.status(200).json({ data: data });
        
    } catch (error) {
        
        if (req.status_debug){
            error["params"] = req.query || req.body;
            return res.status(400).json({ error: error });
        } else {
            return res.status(400).json({ error: 'Erro inesperado' });
        }

    }

};

export default view;