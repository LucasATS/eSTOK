import { DataTypes } from 'sequelize';
import db from '../settings/db';
import Status from './modelStatus_Cads';

const Usuarios = db.define('Usuarios', {
    cpf: { type: DataTypes.STRING(11), allowNull: false, unique: true },
    nome: { type: DataTypes.STRING(127), allowNull: false },
    login: { type: DataTypes.STRING(25), allowNull: false, unique: true },
    email: { type: DataTypes.STRING(127), allowNull: false, unique: true },
    senha_reset: { type: DataTypes.BOOLEAN(), allowNull: false, defaultValue: true },
    senha: { type: DataTypes.STRING(127), allowNull: false },
    id_status: {
      type: DataTypes.INTEGER, references: {
        model: Status,
        key: 'id'
      }
    },
}, {});

Usuarios.login = async (login, senha) => {
  return await db.query("call `sp_login`(?,?);", {
    model: this,
    mapToModel: true,
    replacements: [login, senha]
  });
}


export default Usuarios;