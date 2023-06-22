import { DataTypes, QueryTypes } from 'sequelize';
import db from '../settings/db';
import { Produtos } from './modelProdutos';
import { KardexTipos } from './modelKardexTipos';

export const Entradas = db.define('entradas', {
  id_produto: {
    type: DataTypes.INTEGER, references: {
      model: Produtos,
      key: 'id'
    },
    quantidade: { type: DataTypes.INTEGER, allowNull: false },
    unitario: { type: DataTypes.DECIMAL(15, 4), allowNull: false },
    total: { type: DataTypes.DECIMAL(15, 4), allowNull: false },
    kar_tipo: {
      type: DataTypes.INTEGER, references: {
        model: KardexTipos,
        key: 'id'
      }
    },
    validade: { type: DataTypes.DATE, allowNull: false },
    lote: { type: DataTypes.STRING, allowNull: false },
    data_compra: { type: DataTypes.DATE, allowNull: false }
  },
}, {});

Entradas.sp_entradas = async (id_produto, quantidade, unitario, total, validade, lote, data_compra) => {
  return (await db.query("call `sp_entradas`(?, ?, ?, ?, ?, ?, ?);", {
    model: this,
    mapToModel: true,
    replacements: [id_produto, quantidade, unitario, total, validade, lote, data_compra]
  }))[0];
}