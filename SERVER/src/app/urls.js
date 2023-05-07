import { UserIsAuthentic } from './util.js';

class urls {
    constructor(server, views) {
        this.server = server;
        this.listUrls(views);
    }
    listUrls(views) {
        //Links Loja
        this.server.get("/", views.home);
        
        //Links Administrador
        this.server.get("/operador", views.homeOperador);
        this.server.post("/auth/login", views.entrar);
        this.server.get("/auth/logoff", views.sair);
        
        //Requer estar Logado
        this.server.get("/meus-produtos", UserIsAuthentic, views.forTest);
    }
}

export default urls;