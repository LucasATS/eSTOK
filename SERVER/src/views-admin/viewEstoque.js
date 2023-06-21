import { Estoques } from '../models/modelEstoques';

const view = async (req, res) => {

    try {

        const {Inicial, Quantidade} = req.query;
        
        const data = await Estoques.vw_entradas_cadastro(
            (Number.isNaN(Number(Inicial)))? 1 : Number(Inicial), 
            (Number.isNaN(Number(Quantidade)))? 20 : Number(Quantidade)
        );
    
        const total = await Estoques.total_cadastro();
        
        res.status(200).json({ data: data, total: total });
        

    } catch (error) {
        
        if (req.status_debug){
            res.status(400).json({ error: error });
        } else {
            res.status(400).json({ error: 'Erro inesperado' });
        }

    }

};

export default view;