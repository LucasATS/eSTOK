"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
require("dotenv/config");
var sequelize = new _sequelize.Sequelize(process.env.DATABASE, process.env.USER, process.env.PASS, {
  host: process.env.HOST_DB,
  //banco local
  port: process.env.PORT_DB,
  dialect: 'mysql',
  // CONFIGURADO PARA MySQL
  logging: false,
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: true
  }
});
var _default = sequelize;
exports["default"] = _default;