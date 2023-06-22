import { Vendas } from '../models/modelVendas';

const view = async (req, res) => {

    try {

        const {Inicial, Quantidade} = req.query;
        
        const data = await Vendas.vw_vendas(
            (Number.isNaN(Number(Inicial)))? 1 : Number(Inicial), 
            (Number.isNaN(Number(Quantidade)))? 20 : Number(Quantidade)
        );
    
        const total = await Vendas.total_cadastro();
        
        return res.status(200).json({ data: data, total: total });
        

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