import { Categorias } from '../models/modelCategorias';

const view = async (req, res) => {

    try {
            
        const data = await Categorias.vw_categorias("Ativo");

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