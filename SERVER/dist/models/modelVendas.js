"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vendas = void 0;
var _sequelize = require("sequelize");
var _db = _interopRequireDefault(require("../settings/db"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Vendas = /*#__PURE__*/_createClass(function Vendas() {
  _classCallCheck(this, Vendas);
});
exports.Vendas = Vendas;
_defineProperty(Vendas, "venda", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(comprador, produtos, is_user) {
    var tp_venda, kar_tipo, sql, replacements_venda_cabecalho, _produtos, _iterator, _step, prod, data, lotes, qtd_requisitada, _iterator2, _step2, _lote, _iterator3, _step3, lote, transaction, data_id, id_venda, _i, _produtos2, p, replacements_vendas_itens;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          tp_venda = is_user ? 0 : 1; //ADMINISTRADOR = 0; CLIENTE = 1
          kar_tipo = 4; //STATUS VENDA FECHADA
          // CRIA QUERY
          sql = ""; //"SET @tipo_venda = ?;\nSET @kar_tipo = ?;\nSET @id_vendas = '';\n"
          sql += "CALL sp_vendas_cabecalho(";
          sql += "\n\t?,\n\t?,\n\t?,\n\t?,\n\t?,\n\t?,\n\t?,\n\t?,\n\t?,\n\t?,\n\t?,\n\t?,\n\t?\n);\n";
          //sql += "SELECT @id_venda AS 'id_venda';\n";

          // CRIA REPLACEMENTS VENDA CABEÇALHO
          replacements_venda_cabecalho = [kar_tipo, comprador.nome, comprador.email, comprador.telefone, comprador.endereco, comprador.bairro, comprador.uf, comprador.cidade, comprador.nome_cartao, comprador.numero_cartao, comprador.dt_vencimento, comprador.cvv_e, tp_venda]; // CONSULTA ESTOQUE POR LOTE E PREÇO, E ENTAO VALIDA
          _produtos = [];
          _iterator = _createForOfIteratorHelper(produtos);
          _context.prev = 8;
          _iterator.s();
        case 10:
          if ((_step = _iterator.n()).done) {
            _context.next = 59;
            break;
          }
          prod = _step.value;
          _context.next = 14;
          return _db["default"].query("SELECT * FROM vw_estoque_lote_preco WHERE id = ? ORDER BY validade ASC", {
            type: _sequelize.QueryTypes.SELECT,
            replacements: [prod.id]
          });
        case 14:
          data = _context.sent;
          if (!(data.length > 0)) {
            _context.next = 56;
            break;
          }
          lotes = [];
          qtd_requisitada = Number(prod.quantidade);
          console.log("requisitou ".concat(qtd_requisitada));
          _iterator2 = _createForOfIteratorHelper(data);
          _context.prev = 20;
          _iterator2.s();
        case 22:
          if ((_step2 = _iterator2.n()).done) {
            _context.next = 40;
            break;
          }
          _lote = _step2.value;
          if (!(Number(prod.preco) != Number(_lote.preco))) {
            _context.next = 26;
            break;
          }
          return _context.abrupt("return", {
            is_valid: false,
            Msg: "Tentativa de venda do produto ".concat(_lote.nome, " com pre\xE7o incorreto!")
          });
        case 26:
          if (!(qtd_requisitada == 0)) {
            _context.next = 30;
            break;
          }
          return _context.abrupt("break", 40);
        case 30:
          if (!(Number(_lote.qtd) >= qtd_requisitada)) {
            _context.next = 36;
            break;
          }
          lotes.push([_lote.lote, qtd_requisitada]);
          qtd_requisitada = 0;
          return _context.abrupt("break", 40);
        case 36:
          lotes.push([_lote.lote, Number(_lote.qtd)]);
          qtd_requisitada -= Number(_lote.qtd);
        case 38:
          _context.next = 22;
          break;
        case 40:
          _context.next = 45;
          break;
        case 42:
          _context.prev = 42;
          _context.t0 = _context["catch"](20);
          _iterator2.e(_context.t0);
        case 45:
          _context.prev = 45;
          _iterator2.f();
          return _context.finish(45);
        case 48:
          if (!(qtd_requisitada == 0)) {
            _context.next = 53;
            break;
          }
          _iterator3 = _createForOfIteratorHelper(lotes);
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              lote = _step3.value;
              _produtos.push({
                id: prod.id,
                qtd: lote[1],
                lote: lote[0],
                preco: prod.preco,
                total: prod.total
              });
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          _context.next = 54;
          break;
        case 53:
          return _context.abrupt("return", {
            is_valid: false,
            Msg: "Produto ".concat(data[0].nome, " com saldo abaixo do solicitado!")
          });
        case 54:
          _context.next = 57;
          break;
        case 56:
          return _context.abrupt("return", {
            is_valid: false,
            Msg: "Um ou mais produtos com saldo zerado"
          });
        case 57:
          _context.next = 10;
          break;
        case 59:
          _context.next = 64;
          break;
        case 61:
          _context.prev = 61;
          _context.t1 = _context["catch"](8);
          _iterator.e(_context.t1);
        case 64:
          _context.prev = 64;
          _iterator.f();
          return _context.finish(64);
        case 67:
          _context.next = 69;
          return _db["default"].transaction();
        case 69:
          transaction = _context.sent;
          _context.prev = 70;
          _context.next = 73;
          return _db["default"].query(sql, {
            types: _sequelize.QueryTypes.RAW,
            replacements: replacements_venda_cabecalho,
            transaction: transaction,
            raw: true
          });
        case 73:
          data_id = _context.sent;
          id_venda = data_id[0].id_venda;
          sql = "CALL sp_vendas_itens(\n\t?,\n\t?,\n\t?,\n\t?,\n\t?,\n\t?,\n\t?)\n;";
          _i = 0, _produtos2 = _produtos;
        case 77:
          if (!(_i < _produtos2.length)) {
            _context.next = 87;
            break;
          }
          p = _produtos2[_i];
          replacements_vendas_itens = [id_venda, kar_tipo, p.id, p.qtd, p.lote, p.preco, p.total];
          console.log(sql);
          console.log(replacements_vendas_itens);
          _context.next = 84;
          return _db["default"].query(sql, {
            types: _sequelize.QueryTypes.RAW,
            replacements: replacements_vendas_itens,
            transaction: transaction,
            raw: true
          });
        case 84:
          _i++;
          _context.next = 77;
          break;
        case 87:
          _context.next = 89;
          return transaction.commit();
        case 89:
          return _context.abrupt("return", {
            is_valid: true,
            Msg: "Venda realizada com sucesso!"
          });
        case 92:
          _context.prev = 92;
          _context.t2 = _context["catch"](70);
          console.log(_context.t2);
          _context.next = 97;
          return transaction.rollback();
        case 97:
          return _context.abrupt("return", {
            is_valid: false,
            Msg: "Ocorreu um erro inesperado"
          });
        case 98:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[8, 61, 64, 67], [20, 42, 45, 48], [70, 92]]);
  }));
  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
_defineProperty(Vendas, "vw_vendas_consolidado", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(date_de, date_ate, tipo_produto) {
    var data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _db["default"].query("SELECT ....", {
            type: _sequelize.QueryTypes.SELECT,
            replacements: [posIni, Quantidade]
          });
        case 2:
          data = _context2.sent;
          return _context2.abrupt("return", data);
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}());
_defineProperty(Vendas, "vw_vendas_administrador", /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(date_de, date_ate, tipo_produto) {
    var data;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _db["default"].query("SELECT ....", {
            type: _sequelize.QueryTypes.SELECT,
            replacements: [posIni, Quantidade]
          });
        case 2:
          data = _context3.sent;
          return _context3.abrupt("return", data);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}());
_defineProperty(Vendas, "vw_vendas_cliente", /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(date_de, date_ate, tipo_produto) {
    var data;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _db["default"].query("SELECT ....", {
            type: _sequelize.QueryTypes.SELECT,
            replacements: [posIni, Quantidade]
          });
        case 2:
          data = _context4.sent;
          return _context4.abrupt("return", data);
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}());
_defineProperty(Vendas, "vw_vendas", /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(posIni, Quantidade) {
    var sql, data;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          sql = "SELECT v.id as id, v.cliente as cliente, c.descricao as categoria, p.nome as produto, i.quantidade as quantidade, i.preco as preco, v.updatedAt as data_compra";
          sql += " FROM vendas v INNER JOIN vendas_itens i ON i.id_venda = v.id INNER JOIN produtos p ON p.id = i.id_produto INNER JOIN categorias c ON c.id = p.id_categoria";
          sql += " ORDER BY v.id DESC LIMIT ?, ?";
          _context5.next = 5;
          return _db["default"].query(sql, {
            type: _sequelize.QueryTypes.SELECT,
            replacements: [posIni, Quantidade]
          });
        case 5:
          data = _context5.sent;
          return _context5.abrupt("return", data);
        case 7:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x13, _x14) {
    return _ref5.apply(this, arguments);
  };
}());
_defineProperty(Vendas, "total_cadastro", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
  var data;
  return _regeneratorRuntime().wrap(function _callee6$(_context6) {
    while (1) switch (_context6.prev = _context6.next) {
      case 0:
        _context6.next = 2;
        return _db["default"].query("SELECT COUNT(i.id) as total FROM vendas v INNER JOIN vendas_itens i ON i.id_venda = v.id;", {
          type: _sequelize.QueryTypes.SELECT
        });
      case 2:
        data = _context6.sent;
        return _context6.abrupt("return", data[0].total);
      case 4:
      case "end":
        return _context6.stop();
    }
  }, _callee6);
})));