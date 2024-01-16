"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotina_inativa_lotes = void 0;
var _nodeCron = require("node-cron");
var _db = _interopRequireDefault(require("../settings/db"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var rotina_inativa_lotes = function rotina_inativa_lotes() {
  (0, _nodeCron.schedule)('0 0 */5 * *', function () {
    //6h em 6h
    _db["default"].query("CALL sp_inativa_lotes();");
  });
};
exports.rotina_inativa_lotes = rotina_inativa_lotes;