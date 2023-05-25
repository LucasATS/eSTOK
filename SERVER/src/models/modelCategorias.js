import { DataTypes } from 'sequelize';
import db from '../settings/db';
import Status from './modelStatus_Cads';

const Categorias = db.define('categorias', {
    descricao: { type: DataTypes.STRING(50), allowNull: false, unique: true },
    id_status: {
      type: DataTypes.INTEGER, references: {
        model: Status,
        key: 'id'
      }
    },
}, {});

Categorias.vw_categorias = async (id_status) => {
  return await db.query("SELECT * FROM vw_categorias WHERE id_status = (?)", {
    model: this,
    mapToModel: true,
    replacements: [id_status]
  });
}

Categorias.sp_categorias = async (descricao) => {
  return await db.query("call `sp_categorias`(?);", {
    model: this,
    mapToModel: true,
    replacements: [descricao]
  });
}


export default Categorias;