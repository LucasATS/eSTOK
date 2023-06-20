import DAO from '../tools/DAO';
import { Produtos } from '../models/modelProdutos';
import { Categorias } from '../models/modelCategorias';

const view = async (req, res) => {
    let { id_categoria, Nome } = req.query;

    let campos = ["Nome", "Descricao", "id_categoria"]

    let data = await DAO.filter(Produtos, { id_categoria, Nome }, campos);

    if(data.length > 0){
        const _data = await data.map( async row => {
            let categ = await DAO.get(Categorias, {id: row.id_categoria});
            return {
                Nome: row.Nome, Descricao: row.Descricao, Categoria: categ.descricao
            };
        });
        res.status(200).json({data : _data})
    } else {
        res.status(200).json({data : []})
    }
    

};

export default view;