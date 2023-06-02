import formStatusProduto from "../forms/formAlteraStatusProduto";

const view = async (req, res) => {

    let form = await formStatusProduto(req.body);

    if (form.is_valid) {
        res.status(200).json({ data: { status: 'ok', message: form.message } })
    } else {
        res.status(200).json({ data: { status: 'erro', motivo: form.message } })
    }
};

export default view;