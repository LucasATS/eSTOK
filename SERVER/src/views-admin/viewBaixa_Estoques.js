import { Baixa_Estoques } from "../models/modelBaixa_Estoques";


const view = async (req, res) => {

    try {
            
        const { id } = req.query;

        if (!id){
    
            return res.status(200).json({ data: [] });
            
        } else {
    
            const data = await Baixa_Estoques.vw_baixa_estoques('#'+id);
    
            return res.status(200).json({ data: data });
        }

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