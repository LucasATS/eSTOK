import formProduto from '../forms/formProduto'

const view = async (req, res) => {

    try {
            
        let form = await formProduto(req.body);

        if(form.is_valid){
            return res.status(200).json({data : {status: 'ok', message: form.message}})
        } else {
            return res.status(200).json({data : {status: 'erro', motivo: form.message}})
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