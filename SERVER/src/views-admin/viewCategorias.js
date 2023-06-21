import { Categorias } from '../models/modelCategorias';

const view = async (req, res) => {

    try {
            
        const data = await Categorias.vw_categorias("Ativo");

        res.status(200).json({ data: data });
    

    } catch (error) {
        
        if (req.status_debug){
            res.status(400).json({ error: error });
        } else {
            res.status(400).json({ error: 'Erro inesperado' });
        }

    }

};

export default view;