import formUnidades from '../forms/formUnidades';

const view = async (req, res) => {

    try {
            
        let form = await formUnidades(req.body);

        if (form.is_valid) {
            res.status(200).json({ data: { status: 'ok', message: form.message } })
        } else {
            res.status(200).json({ data: { status: 'erro', motivo: form.message } })
        }


    } catch (error) {
        
        if (req.status_debug){
            res.status(400).json({ error: error });
        } else {
            res.status(400).json({ error: 'Erro inesperado' });
        }

    }

};

export default view;