import { Produtos } from '../models/modelProdutos';

const view = async (req, res) => {

    try {

        let { id } = req.query;
        id = Number.parseInt(id);

        if (Number.isNaN(id)) {
            return res.status(404).json({ error: 'ID é necessário.' });
        }

        let data = await Produtos.vw_dados_produto_cliente(id)
        
        if (data.length > 0) {
            return res.status(200).json({ data: data[0] });
        }else {
            return res.status(404).json({ error: 'Produto não localizado' });
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