import adicionarDadosTest, { BuscarUsuario } from "./DAO";
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
}

export default new views();