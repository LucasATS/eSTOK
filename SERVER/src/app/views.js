import DAO, {adicionarDadosTest} from "./DAO";
import query from './querys';
import forms from "./forms";
import models from "../models/models";

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
    homeAdmin = async (req, res) => {
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

    //Teste (só acessa se logado)
    forTest = async (req, res) => {

        let user = await DAO.get((await this.modelos).Usuario,
        { id: req.user });
        res.json({return : `logado(a) como ${user.nome}`})
        console.log(query.userStatus_1(this.modelos))
    };

}

export default views;