import { Categorias } from '../models/modelCategorias';

const view = async (req, res) => {
    
    const data = await Categorias.vw_categorias("Ativo");

    res.status(200).json({data : data});

    console.log(data);
};

export default view;