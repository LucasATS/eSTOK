import UserIsAuthentic from '../tools/verificaAutenticacao.js';

class urls {
    constructor(server) {
        this.server = server;
        this.rotas();
    }
    rotas() {

        //Links Loja
        this.server.get("/", require('../views/viewHome.js').default);
        
        //Links Administrador
        this.server.get("/admin", require('../views/viewHomeAdmin.js').default);
        this.server.post("/auth/login", require('../views/viewLogin.js').default);
        this.server.get("/auth/logoff", require('../views/viewLogout.js').default);
        
        //Requer estar Logado
        this.server.get("/meus-produtos", UserIsAuthentic, require('../views/viewLogout.js').default);
        
    }
}

export default urls;