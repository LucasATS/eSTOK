import { Vendas } from "../models/modelVendas";

const view = async (req, res) => {

    try {

        const {date_de, date_ate, tipo_produto} = req.query;
    
        if (!date_de, !date_ate, !tipo_produto){
    
            return res.status(200).json({ data: 'Dados Obrigatórios' });
            
        } else {

            const data = await Vendas.vw_vendas_consolidado(
                date_de, date_ate, tipo_produto
            );

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