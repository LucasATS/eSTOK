"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KardexTipos = void 0;
var _sequelize = require("sequelize");
var _db = _interopRequireDefault(require("../settings/db"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var KardexTipos = _db["default"].define('kardex_tipos', {
  descricao: {
    type: _sequelize.DataTypes.STRING(50),
    allowNull: false
  }
}, {});
exports.KardexTipos = KardexTipos;