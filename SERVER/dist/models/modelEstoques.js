"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Estoques = void 0;
var _sequelize = require("sequelize");
var _db = _interopRequireDefault(require("../settings/db"));
var _modelStatus_Cads = require("./modelStatus_Cads");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Estoques = _db["default"].define('estoques', {
  id_produto: {
    type: _sequelize.DataTypes.INTEGER,
    references: {
      model: _modelStatus_Cads.Status_Cads,
      key: 'id'
    },
    saldo: {
      type: _sequelize.DataTypes.STRING(11),
      allowNull: false
    },
    data_compra: {
      type: _sequelize.DataTypes.DATE(),
      allowNull: false
    },
    data_validade: {
      type: _sequelize.DataTypes.DATE(),
      allowNull: false
    }
  }
}, {});
exports.Estoques = Estoques;