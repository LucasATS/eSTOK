import adicionarDadosTest from "./DAO";
import query from './consultas';
import forms from "./validar";
import models from "./models";

class views {
    constructor(dirPath) {
        // INICIA O MODELS
        this.modelos = models.init(true);
        adicionarDadosTest(this.modelos);

        //ADD VAR PATH
        this.PATH = dirPath;
    }

    //Página /
    home = async (req, res) => {
        res.sendFile('index.html',{ root: this.PATH + '/web/public' });
    };

    //Página Operador
    homeOperador = async (req, res) => {
        res.sendFile('index.html',{ root: this.PATH + '/web/private' });
    };

    //logoff da conta
    sair = async (req, res) => {
        res.clearCookie('sessao');
        res.redirect('/operador');
    };

    //Login
    entrar = async (req, res) => {
        let { email, senha } = req.body;
        let form = await forms.FormularioAuthentic((await this.modelos).Usuario, {
            Email: email,
            Senha: senha
        });

        if (form.is_valid){
            res.cookie('sessao', form.sessao);
            res.json({return : 'Autorizado'})
        } else {
            res.json({return : 'Usuário e/ou senha incorreto(s)'})
        }
    };

    //Teste (só acessa se logado)
    forTest = async (req, res) => {

        let user = await query.getUser((await this.modelos).Usuario,
        { id: req.user });

        res.json({return : `logado como ${user.Nome}`})

    };

}

export default views;