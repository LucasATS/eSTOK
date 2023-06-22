import DAO from '../tools/DAO';
import { Produtos } from '../models/modelProdutos';
import { Categorias } from '../models/modelCategorias';

const view = async (req, res) => {

    try {

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
            return res.status(200).json({data : _data})
        } else {
            return res.status(200).json({data : []})
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