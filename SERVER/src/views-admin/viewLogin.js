import formAuthenticUser from "../forms/formAutenticacaoUsuario";

const login = async (req, res) => {

    try {

        let form = await formAuthenticUser(req.body);

        if (form.is_valid){
            res.cookie('sessao', form.sessao);
            return res.status(200).json({ data: { status: 'ok', message: form.msg } })
        } else {
            return res.status(401).json({ data: { status: 'erro', message: form.msg } })
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

export default login;