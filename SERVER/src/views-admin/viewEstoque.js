import { Estoques } from '../models/modelEstoques';

const view = async (req, res) => {

    const {Inicial, Quantidade} = req.query;
    
    const data = await Estoques.vw_entradas_cadastro(
        (!Inicial)? 1 : Number(Inicial), 
        (!Quantidade)? 20 : Number(Quantidade)
    );

    const total = await Estoques.total_cadastro();
    
    res.status(200).json({ data: data, total: total });

};

export default view;