"use strict";

var _express = _interopRequireDefault(require("express"));
var _appConfig = _interopRequireDefault(require("./app/appConfig"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// RESPONSÁVEL PELO CONTROLE DE TODOS OS APPS

var PATH = __dirname;
var server = (0, _express["default"])();
_express["default"].request.headers;
// SERVIDOR DO APLICATIVO
(0, _appConfig["default"])(server, PATH);