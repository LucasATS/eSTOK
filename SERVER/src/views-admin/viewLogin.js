import formAuthenticUser from "../forms/formAutenticacaoUsuario";

const login = async (req, res) => {

    try {

        let form = await formAuthenticUser(req.body);

        if (form.is_valid){
            res.cookie('sessao', form.sessao);
            res.status(200).json({ data: { status: 'ok', message: form.msg } })
        } else {
            res.status(401).json({ data: { status: 'erro', message: form.msg } })
        }
        
    } catch (error) {
        
        if (req.status_debug){
            res.status(400).json({ error: error });
        } else {
            res.status(400).json({ error: 'Erro inesperado' });
        }
    }

};

export default login;