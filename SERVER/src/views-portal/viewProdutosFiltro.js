import DAO from '../tools/DAO';
import { Produtos } from '../models/modelProdutos'

const view = async (req, res) => {
    let fields = req.body;
    let campos = ["Nome", "Descricao"]
    let data = await DAO.filter(Produtos, fields, campos)
    if(data){
        res.status(200).json({data : {status: 'ok', data: data}})
    }
};

export default view;