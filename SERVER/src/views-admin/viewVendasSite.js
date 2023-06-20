
const view = async (req, res) => {

    const {date_de, date_ate, tipo_produto} = req.query;
    
    data = [];

    //const data = await Vendas.vw_vendas_cliente(
    //    date_de, date_ate, tipo_produto
    //);
    
    res.status(200).json({ data: data });

};

export default view;