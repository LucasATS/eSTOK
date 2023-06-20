import { Baixa_Estoques } from "../models/modelBaixa_Estoques";


const view = async (req, res) => {
    const { id } = req.query;

    if (!id){

        res.status(200).json({ data: [] });
        
    } else {

        const data = await Baixa_Estoques.vw_baixa_estoques('#'+id);

        res.status(200).json({ data: data });
    }

    
};

export default view;