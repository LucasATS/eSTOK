import UserIsAuthentic from '../tools/verificaAutenticacao.js';

class urls {
    constructor(server) {
        this.server = server;
        this.rotas();
    }
    rotas() {

        //Links portal-web - GET
        this.server.get("/", require('../views/portal-web/viewHome.js').default);
        this.server.get("/api/produtos", require('../views/portal-web/viewHome.js').default);
        this.server.get("/api/filtros-produtos", require('../views/portal-web/viewHome.js').default);
        this.server.get("/api/dados-produto", require('../views/portal-web/viewHome.js').default);
        
        //Links portal-web - POST
        this.server.post("/api/venda", require('../views/portal-web/viewHome.js').default);

        //Links admin-web - GET - NÃO AUTENTICADO
        this.server.get("/admin", require('../views/admin-web/viewHome.js').default);

        //Links admin-web - POST - NÃO AUTENTICADO
        this.server.post("/admin/auth/login", require('../views/admin-web/viewLogin.js').default);

        //Links admin-web - GET - AUTENTICADO
        this.server.get("/admin/api/produtos", UserIsAuthentic, require('../views/admin-web/viewHome.js').default);
        this.server.get("/admin/api/filtros-produtos", UserIsAuthentic, require('../views/admin-web/viewHome.js').default);
        this.server.get("/admin/api/dados-produto", UserIsAuthentic, require('../views/admin-web/viewHome.js').default);

        this.server.get("/admin/api/estoque", UserIsAuthentic, require('../views/admin-web/viewHome.js').default);
        this.server.get("/admin/api/filtros-estoque", UserIsAuthentic, require('../views/admin-web/viewHome.js').default);
        this.server.get("/admin/api/dados-entrada", UserIsAuthentic, require('../views/admin-web/viewHome.js').default);
        this.server.get("/admin/api/categorias", UserIsAuthentic, require('../views/admin-web/viewHome.js').default);
        this.server.get("/admin/api/tipos-unidade-de-medidas", UserIsAuthentic, require('../views/admin-web/viewHome.js').default);
        this.server.get("/admin/api/tipos-de-produto", UserIsAuthentic, require('../views/admin-web/viewHome.js').default);

        this.server.get("/admin/auth/logout", require('../views/admin-web/viewLogout.js').default);

        //Links admin-web - POST - AUTENTICADO
        this.server.post("/admin/api/produto/create", UserIsAuthentic, require('../views/admin-web/viewHome.js').default);
        this.server.post("/admin/api/produto/edit", UserIsAuthentic, require('../views/admin-web/viewHome.js').default);
        this.server.post("/admin/api/produto/ativa", UserIsAuthentic, require('../views/admin-web/viewHome.js').default);
        this.server.post("/admin/api/produto/inativa", UserIsAuthentic, require('../views/admin-web/viewHome.js').default);

        this.server.post("/admin/api/estoque/movimentacao-entrada", UserIsAuthentic, require('../views/admin-web/viewHome.js').default);
        this.server.post("/admin/api/estoque/movimentacao-saida", UserIsAuthentic, require('../views/admin-web/viewHome.js').default);
    }
}

export default urls;