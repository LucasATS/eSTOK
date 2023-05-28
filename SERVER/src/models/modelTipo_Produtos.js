import { DataTypes } from 'sequelize';
import db from '../settings/db';
import { Status_Cads } from './modelStatus_Cads';

export const Tipo_Produtos = db.define('tipo_produtos', {
  descricao: { type: DataTypes.STRING(100), allowNull: false },
  id_status: {
    type: DataTypes.INTEGER, references: {
      model: Status_Cads,
      key: 'id'
    }
  },
}, {});


Tipo_Produtos.vw_tipo_produto = async (id_status) => {
  return await db.query("SELECT * FROM vw_tipo_produto WHERE id_status = (?)", {
    model: this,
    mapToModel: true,
    replacements: [id_status]
  });
}

Tipo_Produtos.sp_tipo_produto = async (descricao, id_status) => {
  return (await db.query("call `sp_tipo_produto`(?,?);", {
    model: this,
    mapToModel: true,
    replacements: [descricao, id_status]
  }))[0];
}