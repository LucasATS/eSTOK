import formVenda from '../forms/formVenda';

const view = async (req, res) => {

    const body = req.body;

    let form = await formVenda(body, false);

    if (form.is_valid) {
        res.status(200).json({ data: { status: 'ok', message: form.message } })
    } else {
        res.status(200).json({ data: { status: 'erro', motivo: form.message } })
    }
    
};

export default view;