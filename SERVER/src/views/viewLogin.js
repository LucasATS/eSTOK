import formAuthenticUser from "../forms/formAutenticacaoUsuario";

const login = async (req, res) => {
    let { email, senha } = req.body;
    let form = await formAuthenticUser({
        login: login,
        email: email,
        senha: senha
    });

    if (form.is_valid){
        res.cookie('sessao', form.sessao);
        res.json({return : 'Autorizado'})
    } else {
        res.json({return : 'Usuário e/ou senha incorreto(s)'})
    }
};

export default login;