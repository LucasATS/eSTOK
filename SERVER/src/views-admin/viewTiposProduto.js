import { Tipo_Produtos } from '../models/modelTipo_Produtos';

const view = async (req, res) => {

    try {

        const data = await Tipo_Produtos.vw_tipo_produto("Ativo");

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