import { DataTypes } from 'sequelize';
import db from '../settings/db';
import { Status_Cads } from './modelStatus_Cads';

export const Unidades = db.define('unidades', {
  id: { type: DataTypes.CHAR(6), allowNull: false, primaryKey: true},/* ID é PK exemplo "Caixa com 25, id = CX25" */
  descricao: { type: DataTypes.STRING(50), allowNull: false },
  id_status: {
    type: DataTypes.INTEGER, references: {
      model: Status_Cads,
      key: 'id'
    }
  },
}, {});

Unidades.vw_unidades = async (id_satus) => {
  return await db.query("SELECT * FROM vw_unidades vwu WHERE vwu.status = (?)"/**o valor de referencia sera Literal Ativo ou Inativo valores numericos nao retornam informações */, {
    model: this,
    mapToModel: true,
    replacements: [id_satus]
  });
}

Unidades.sp_unidades = async (id_uni, descricao ) => {
  return (await db.query("call `sp_unidades`(?,?, 1);", {
    model: this,
    mapToModel: true,
    replacements: [id_uni, descricao]
  }))[0];
}
