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
        this.server.post("/admin/auth/login", require('../views-admin/viewLogin.js').default);  // OK

        //Links admin-web - GET - AUTENTICADO
        this.server.get("/admin/api/produtos", UserIsAuthentic, require('../views-admin/viewProdutos.js').default);
        this.server.get("/admin/api/produtos/dados-produto", UserIsAuthentic, require('../views-admin/viewDadosProduto.js').default);

        this.server.get("/admin/api/categorias", UserIsAuthentic, require('../views-admin/viewCategorias.js').default);

        this.server.get("/admin/api/tipos-de-medidas", UserIsAuthentic, require('../views-admin/viewTiposMedida.js').default);

        this.server.get("/admin/api/tipos-de-produto", UserIsAuthentic, require('../views-admin/viewTiposProduto.js').default);

        this.server.get("/admin/api/estoque", UserIsAuthentic, require('../views-admin/viewEstoque.js').default);
        this.server.get("/admin/api/estoque/filtro", UserIsAuthentic, require('../views-admin/viewEstoqueFiltro.js').default);

        this.server.get("/admin/api/relatorios/vendas-administrador", UserIsAuthentic, require('../views-admin/viewVendasAdministrador.js').default);
        this.server.get("/admin/api/relatorios/vendas-site", UserIsAuthentic, require('../views-admin/viewVendasSite.js').default);
        this.server.get("/admin/api/relatorios/consolidado", UserIsAuthentic, require('../views-admin/viewVendasConsolidado.js').default);
        this.server.get("/admin/api/relatorios/itens-no-estoque", UserIsAuthentic, require('../views-admin/viewItensNoEstoque.js').default);

        this.server.get("/admin/auth/logout", require('../views-admin/viewLogout.js').default); // ok

        //Links admin-web - POST - AUTENTICADO
        this.server.post("/admin/api/produtos/create", UserIsAuthentic, require('../views-admin/viewCreateProduto.js').default);
        this.server.post("/admin/api/produtos/altera-status", UserIsAuthentic, require('../views-admin/viewAlterStatusProduto.js').default);

        this.server.post("/admin/api/categorias/create", UserIsAuthentic, require('../views-admin/viewCreateCategoria.js').default); //ok

        this.server.post("/admin/api/tipos-de-medidas/create", UserIsAuthentic, require('../views-admin/viewCreateTiposMedida.js').default);

        this.server.post("/admin/api/estoque/movimentacao-entrada", UserIsAuthentic, require('../views-admin/viewMovimentacaoEntrada.js').default);
        this.server.post("/admin/api/estoque/movimentacao-saida", UserIsAuthentic, require('../views-admin/viewMovimentacaoSaida.js').default);

        //para executar dados de teste
        this.server.get("/for-tests", require('../views-admin/_viewDadosTeste.js').default);

    }
}

export default urls;