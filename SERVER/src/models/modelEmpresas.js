import { DataTypes } from 'sequelize';
import db from '../settings/db';
import Status from './modelStatus_Cads';

const Empresas = db.define('empresas', {
    razao_social: { type: DataTypes.STRING(255), allowNull: false },
    nome_fantasia: { type: DataTypes.STRING(255), allowNull: false },
    telefone: { type: DataTypes.STRING(14), allowNull: false },
    email: { type: DataTypes.STRING(255), allowNull: false },
    id_status: {
      type: DataTypes.INTEGER, references: {
        model: Status,
        key: 'id',
      }
    },
}, {});

Empresas.vw_empresas = async (id_status) => {
  return await db.query("SELECT * FROM vw_empresas WHERE id_status = (?)", {
    model: this,
    mapToModel: true,
    replacements: [id_status]
  });
}





export default Empresas;