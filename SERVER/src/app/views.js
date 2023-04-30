import adicionarDadosTest, { BuscarUsuario } from "./DAO";
import forms from "./validar";
import models from "./models";

class views {
    constructor() {
        // INICIA O MODELS
        this.modelos = models.init(true);
        adicionarDadosTest(this.modelos);
    }

    //Página /
    home = async (req, res) => {
        res.send("eStok - no ar :D");
    };

    //Página /teste
    teste = async (req, res) => {
        let user = await BuscarUsuario((await this.modelos).Usuario, {
            id: 1
        });
        console.log('>>>>',user.Nome);
        res.send("Usuário: " + user.Nome);
    };
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

export default new views();