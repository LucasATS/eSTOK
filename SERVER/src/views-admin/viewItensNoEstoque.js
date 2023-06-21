import { Estoques } from "../models/modelEstoques";

const view = async (req, res) => {

    try {

        const data = await Estoques.vw_estoque_por_lotes();

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