import formAuthenticUser from "../forms/formAutenticacaoUsuario";

const login = async (req, res) => {
    
    let form = await formAuthenticUser(req.body);

    if (form.is_valid){
        res.cookie('sessao', form.sessao);
        res.status(200).json({data : 'Autorizado'})
    } else {
        res.status(401).json({data : 'Usuário e/ou senha incorreto(s)'})
    }
};

export default login;