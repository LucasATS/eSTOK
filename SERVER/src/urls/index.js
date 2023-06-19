import UserIsAuthentic from '../tools/verificaAutenticacao.js';

class urls {
    constructor(server) {
        this.server = server;
        this.rotas();
    }
    rotas() {

        //Links portal-web - GET
        this.server.get("/", require('../views-portal/viewHome.js').default); // OK
        this.server.get("/api/produtos/filtro", require('../views-portal/viewProdutosFiltro.js').default);
        this.server.get("/api/produtos/dados-produto", require('../views-portal/viewDadosproduto.js').default);
        
        //Links portal-web - POST
        this.server.post("/api/venda", require('../views-portal/viewVenda.js').default);

        //Links admin-web - GET - NÃO AUTENTICADO
        this.server.get("/admin", require('../views-admin/viewHome.js').default); // OK

        //Links admin-web - POST - NÃO AUTENTICADO
        this.server.post("/api/admin/auth/login", require('../views-admin/viewLogin.js').default);  // OK

        //Links admin-web - GET - AUTENTICADO
        this.server.get("/api/admin/produtos", UserIsAuthentic, require('../views-admin/viewProdutos.js').default);
        this.server.get("/api/admin/produtos/dados-produto", UserIsAuthentic, require('../views-admin/viewDadosProduto.js').default);

        this.server.get("/api/admin/categorias", UserIsAuthentic, require('../views-admin/viewCategorias.js').default);

        this.server.get("/api/admin/tipos-de-medidas", UserIsAuthentic, require('../views-admin/viewUnidades.js').default);

        this.server.get("/api/admin/tipos-de-produto", UserIsAuthentic, require('../views-admin/viewTiposProduto.js').default);

        this.server.get("/api/admin/estoque", UserIsAuthentic, require('../views-admin/viewEstoque.js').default);

        this.server.get("/api/admin/relatorios/vendas-administrador", UserIsAuthentic, require('../views-admin/viewVendasAdministrador.js').default);
        this.server.get("/api/admin/relatorios/vendas-site", UserIsAuthentic, require('../views-admin/viewVendasSite.js').default);
        this.server.get("/api/admin/relatorios/consolidado", UserIsAuthentic, require('../views-admin/viewVendasConsolidado.js').default);
        this.server.get("/api/admin/relatorios/itens-no-estoque", UserIsAuthentic, require('../views-admin/viewItensNoEstoque.js').default);

        this.server.get("/api/admin/auth/logout", require('../views-admin/viewLogout.js').default); // ok

        //Links admin-web - POST - AUTENTICADO
        this.server.post("/api/admin/produtos/create",UserIsAuthentic, require('../views-admin/viewCreateProduto.js').default);
        this.server.post("/api/admin/produtos/altera-status", UserIsAuthentic, require('../views-admin/viewAlterStatusProduto.js').default);

        this.server.post("/api/admin/baixaestoques/create",UserIsAuthentic, require('../views-admin/viewCreateBaixa_Estoques.js').default);

        this.server.post("/api/admin/categorias/create", UserIsAuthentic, require('../views-admin/viewCreateCategoria.js').default); //ok

        this.server.post("/api/admin/tipos-de-medidas/create", UserIsAuthentic, require('../views-admin/viewCreateUnidades.js').default);

        this.server.post("/api/admin/tipos-de-produto/create", UserIsAuthentic, require('../views-admin/viewCreateTiposProduto.js').default);

        this.server.post("/api/admin/estoque/movimentacao-entrada", UserIsAuthentic, require('../views-admin/viewMovimentacaoEntrada.js').default);

        this.server.post("/api/admin/venda", UserIsAuthentic, require('../views-admin/viewVenda.js').default);

    }
}

export default urls;