import adicionarDadosTest, { BuscarUsuario } from "./DAO";
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

    //Link logoff
    sair = async (req, res) => {
        res.clearCookie('Token');
        res.redirect('/operador');
    };

    //Login
    entrar = async (req, res) => {
        let { email, senha } = req.body;
        console.log(email,senha);
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

    //Testes
    cadastra = async (req, res) => {
        let cad = await forms.FormularioProduto((await this.modelos).Produto,{
            Nome: 'Blusa',
            Descricao: 'Regata com estampa',
        } )
        
        if (cad == 'success') {
            res.send("produto: " + "Blusa cadastrada");
        } else {
            res.send(cad);
        }
        
    };

    //Testes
    atualiza = async (req, res) => {
        let cad = await forms.FormularioProduto((await this.modelos).Produto,{
            id: 1,
            Nome: 'Blusa',
            Descricao: 'Regata com estampa',
        } )
        
        if (cad == 'success') {
            res.send("produto: " + "Blusa atualizada");
        } else {
            res.send(cad);
        }
    };
}

export default views;