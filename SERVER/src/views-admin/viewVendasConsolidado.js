
const view = async (req, res) => {

    try {

        const {date_de, date_ate, tipo_produto} = req.query;
    
        data = [];
        
        //const data = await Vendas.vw_vendas_consolidado(
        //    date_de, date_ate, tipo_produto
        //);
    
        res.status(200).json({ data: data });
        
        
    } catch (error) {
        
        if (req.status_debug){
            res.status(400).json({ error: error });
        } else {
            res.status(400).json({ error: 'Erro inesperado' });
        }
    }

};

export default view;