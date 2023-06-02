import { DataTypes, QueryTypes } from 'sequelize';
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

Categorias.vw_categorias = async (status_cat) => {
  const data = await db.query(
    "SELECT * FROM vw_categorias vw WHERE vw.Status = (?)"/*o valor de referencia sera Literal Ativo ou Inativo valores numericos nao retornam informações */,
    {
      replacements: [status_cat],
      type: QueryTypes.SELECT
    }
  );
  return data;
}


Categorias.sp_categorias = async (descricao) => {
  return (await db.query("call `sp_categorias`(?, 1);", {
    model: this,
    mapToModel: true,
    replacements: [descricao]
  }))[0];
}