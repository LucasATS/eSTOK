import UserIsAuthentic from '../tools/verificaAutenticacao.js';

class urls {
    constructor(server) {
        this.server = server;
        this.rotas();
    }
    rotas() {

        //Links portal-web - GET
        this.server.get("/", require('../views/portal-web/viewHome.js').default);
        this.server.get("/api/produtos", require('../views/portal-web/viewProdutos.js').default);
        this.server.get("/api/produtos/filtro", require('../views/portal-web/viewProdutosFiltro.js').default);
        this.server.get("/api/produtos/dados-produto", require('../views/portal-web/viewDadosproduto.js').default);
        
        //Links portal-web - POST
        this.server.post("/api/venda", require('../views/portal-web/viewVenda.js').default);

        //Links admin-web - GET - NÃO AUTENTICADO
        this.server.get("/admin", require('../views/admin-web/viewHome.js').default);

        //Links admin-web - POST - NÃO AUTENTICADO
        this.server.post("/admin/auth/login", require('../views/admin-web/viewLogin.js').default);

        //Links admin-web - GET - AUTENTICADO
        this.server.get("/admin/api/ultimas-vendas", UserIsAuthentic, require('../views/admin-web/viewUltimasVendas.js').default);
        this.server.get("/admin/api/ultimos-lancamentos", UserIsAuthentic, require('../views/admin-web/viewUltimosLancamentos.js').default);

        this.server.get("/admin/api/produtos", UserIsAuthentic, require('../views/admin-web/viewProdutos.js').default);
        this.server.get("/admin/api/produtos/filtro", UserIsAuthentic, require('../views/admin-web/viewProdutosFiltro.js').default);
        this.server.get("/admin/api/produtos/dados-produto", UserIsAuthentic, require('../views/admin-web/viewDadosProduto.js').default);

        this.server.get("/admin/api/categorias", UserIsAuthentic, require('../views/admin-web/viewCategorias.js').default);

        this.server.get("/admin/api/tipos-unidade-de-medidas", UserIsAuthentic, require('../views/admin-web/viewTiposMedida.js').default);

        this.server.get("/admin/api/tipos-de-produto", UserIsAuthentic, require('../views/admin-web/viewTiposProduto.js').default);

        this.server.get("/admin/api/estoque", UserIsAuthentic, require('../views/admin-web/viewEstoque.js').default);
        this.server.get("/admin/api/estoque/filtro", UserIsAuthentic, require('../views/admin-web/viewEstoqueFiltro.js').default);
        this.server.get("/admin/api/estoque/dados-entrada", UserIsAuthentic, require('../views/admin-web/viewDadosEntrada.js').default);

        this.server.get("/admin/api/relatorios/vendas-administrador", UserIsAuthentic, require('../views/admin-web/viewVendasAdministrador.js').default);
        this.server.get("/admin/api/relatorios/vendas-site", UserIsAuthentic, require('../views/admin-web/viewVendasSite.js').default);
        this.server.get("/admin/api/relatorios/consolidado", UserIsAuthentic, require('../views/admin-web/viewVendasConsolidado.js').default);
        this.server.get("/admin/api/relatorios/itens-no-estoque", UserIsAuthentic, require('../views/admin-web/viewItensNoEstoque.js').default);

        this.server.get("/admin/auth/logout", require('../views/admin-web/viewLogout.js').default);

        //Links admin-web - POST - AUTENTICADO
        this.server.post("/admin/api/produtos/create", UserIsAuthentic, require('../views/admin-web/viewCreateProduto.js').default);
        this.server.post("/admin/api/produtos/altera-status", UserIsAuthentic, require('../views/admin-web/viewAlterStatusProduto.js').default);

        this.server.get("/admin/api/tipos-de-medidas/create", UserIsAuthentic, require('../views/admin-web/viewCreateTiposMedida.js').default);

        this.server.post("/admin/api/estoque/movimentacao-entrada", UserIsAuthentic, require('../views/admin-web/viewMovimentacaoEntrada.js').default);
        this.server.post("/admin/api/estoque/movimentacao-saida", UserIsAuthentic, require('../views/admin-web/viewMovimentacaoSaida.js').default);
    }
}

export default urls;