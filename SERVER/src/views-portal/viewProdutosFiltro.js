import DAO from '../tools/DAO';
import modelProduto from '../models/modelProduto'

const view = async (req, res) => {
    let fields = req.body;
    let campos = ["Nome", "Descricao"]
    let data = await DAO.filter(modelProduto, fields, campos)
    if(data){
        res.status(200).json({data : {status: 'ok', data: data}})
    }
};

export default view;