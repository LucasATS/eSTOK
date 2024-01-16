"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _verificaAutenticacao = _interopRequireDefault(require("../tools/verificaAutenticacao.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var urls = /*#__PURE__*/function () {
  function urls(server) {
    _classCallCheck(this, urls);
    this.server = server;
    this.rotas();
  }
  _createClass(urls, [{
    key: "rotas",
    value: function rotas() {
      //Links portal-web - GET
      this.server.get("/", require('../views-portal/viewHome.js')["default"]); // OK
      this.server.get("/api/produtos/filtro", require('../views-portal/viewProdutosFiltro.js')["default"]);
      this.server.get("/api/produtos/dados-produto", require('../views-portal/viewDadosproduto.js')["default"]);

      //Links portal-web - POST
      this.server.post("/api/venda", require('../views-portal/viewVenda.js')["default"]);

      //Links admin-web - GET - NÃO AUTENTICADO
      this.server.get("/admin", require('../views-admin/viewHome.js')["default"]); // OK

      //Links admin-web - POST - NÃO AUTENTICADO
      this.server.post("/api/admin/auth/login", require('../views-admin/viewLogin.js')["default"]); // OK

      //Links admin-web - GET - AUTENTICADO
      this.server.get("/api/admin/produtos", _verificaAutenticacao["default"], require('../views-admin/viewProdutos.js')["default"]);
      this.server.get("/api/admin/produtos/dados-produto", _verificaAutenticacao["default"], require('../views-admin/viewDadosProduto.js')["default"]);
      this.server.get("/api/admin/categorias", _verificaAutenticacao["default"], require('../views-admin/viewCategorias.js')["default"]);
      this.server.get("/api/admin/tipos-de-medidas", _verificaAutenticacao["default"], require('../views-admin/viewUnidades.js')["default"]);
      this.server.get("/api/admin/tipos-de-produto", _verificaAutenticacao["default"], require('../views-admin/viewTiposProduto.js')["default"]);
      this.server.get("/api/admin/estoque", _verificaAutenticacao["default"], require('../views-admin/viewEstoque.js')["default"]);
      this.server.get("/api/admin/relatorios/vendas-administrador", _verificaAutenticacao["default"], require('../views-admin/viewVendasAdministrador.js')["default"]);
      this.server.get("/api/admin/relatorios/vendas-site", _verificaAutenticacao["default"], require('../views-admin/viewVendasSite.js')["default"]);
      this.server.get("/api/admin/relatorios/consolidado", _verificaAutenticacao["default"], require('../views-admin/viewVendasConsolidado.js')["default"]);
      this.server.get("/api/admin/relatorios/itens-no-estoque", _verificaAutenticacao["default"], require('../views-admin/viewItensNoEstoque.js')["default"]);
      this.server.get("/api/admin/relatorios/baixaestoques", _verificaAutenticacao["default"], require('../views-admin/viewBaixa_Estoques.js')["default"]);
      this.server.get("/api/admin/relatorios/entradas-produto", _verificaAutenticacao["default"], require('../views-admin/viewEntradasProdutos.js')["default"]);
      this.server.get("/api/admin/vendas", _verificaAutenticacao["default"], require('../views-admin/viewVendas.js')["default"]);
      this.server.get("/api/admin/auth/logout", require('../views-admin/viewLogout.js')["default"]);

      //Links admin-web - POST - AUTENTICADO
      this.server.post("/api/admin/produtos/create", _verificaAutenticacao["default"], require('../views-admin/viewCreateProduto.js')["default"]);
      this.server.post("/api/admin/produtos/altera-status", _verificaAutenticacao["default"], require('../views-admin/viewAlterStatusProduto.js')["default"]);
      this.server.post("/api/admin/baixaestoques/create", _verificaAutenticacao["default"], require('../views-admin/viewCreateBaixa_Estoques.js')["default"]);
      this.server.post("/api/admin/categorias/create", _verificaAutenticacao["default"], require('../views-admin/viewCreateCategoria.js')["default"]); //ok

      this.server.post("/api/admin/tipos-de-medidas/create", _verificaAutenticacao["default"], require('../views-admin/viewCreateUnidades.js')["default"]);
      this.server.post("/api/admin/tipos-de-produto/create", _verificaAutenticacao["default"], require('../views-admin/viewCreateTiposProduto.js')["default"]);
      this.server.post("/api/admin/estoque/movimentacao-entrada", _verificaAutenticacao["default"], require('../views-admin/viewMovimentacaoEntrada.js')["default"]);
      this.server.post("/api/admin/venda", _verificaAutenticacao["default"], require('../views-admin/viewVendaCreate.js')["default"]);
    }
  }]);
  return urls;
}();
var _default = urls;
exports["default"] = _default;