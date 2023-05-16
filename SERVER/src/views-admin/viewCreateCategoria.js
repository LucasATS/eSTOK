import formCategoria from '../forms/formCategoria';

const view = async (req, res) => {

    let { descricao } = req.body;

    let form = await formCategoria({
        descricao: descricao
    });

    if (form.is_valid){
        res.status(200).json({data : {status: 'ok', message: form.message}})
    } else {
        res.status(200).json({data : {status: 'erro', motivo: form.message}})
    }
    
};

export default view;