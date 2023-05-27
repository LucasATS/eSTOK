import { DataTypes } from 'sequelize';
import db from '../settings/db';
import { Status_Cads } from './modelStatus_Cads';

export const Unidades = db.define('unidades', {
  descricao: { type: DataTypes.STRING(50), allowNull: false },
  id_status: {
    type: DataTypes.INTEGER, references: {
      model: Status_Cads,
      key: 'id'
    }
  },
}, {});

Unidades.vw_unidades = async (id_satus) => {
  return await db.query("SELECT * FROM vw_unidades WHERE id_status = (?)", {
    model: this,
    mapToModel: true,
    replacements: [id_satus]
  });
}

Unidades.sp_unidades = async (id_uni, descricao, id_satus) => {
  return await db.query("call `sp_unidades`(?,?,?);", {
    model: this,
    mapToModel: true,
    replacements: [id_uni, descricao, id_satus]
  });
}
