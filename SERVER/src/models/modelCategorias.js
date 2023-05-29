import { DataTypes } from 'sequelize';
import db from '../settings/db';
import { Status_Cads } from './modelStatus_Cads';

export const Categorias = db.define('categorias', {
    descricao: { type: DataTypes.STRING(50), allowNull: false, unique: true },
    id_status: {
      type: DataTypes.INTEGER, references: {
        model: Status_Cads,
        key: 'id'
      }
    },
}, {});

Categorias.vw_categorias = async (id_status) => {
  return await db.query("SELECT * FROM vw_categorias vw WHERE vw.Status = (?)"/*o valor de referencia sera Literal Ativou ou Inativo valores numericos nao retornam informações */, {
    model: this,
    mapToModel: true,
    replacements: [id_status]
  });
}

Categorias.sp_categorias = async (descricao, id_status) => {
  return (await db.query("call `sp_categorias`(?, ?);", {
    model: this,
    mapToModel: true,
    replacements: [descricao, id_status]
  }))[0];
}