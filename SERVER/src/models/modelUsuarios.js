import { DataTypes } from 'sequelize';
import db from '../settings/db';
import { Status_Cads } from './modelStatus_Cads';

export const Usuarios = db.define('usuarios', {
    cpf: { type: DataTypes.STRING(11), allowNull: false, unique: true },
    nome: { type: DataTypes.STRING(127), allowNull: false },
    login: { type: DataTypes.STRING(25), allowNull: false, unique: true },
    email: { type: DataTypes.STRING(127), allowNull: false, unique: true },
    senha_reset: { type: DataTypes.BOOLEAN(), allowNull: false, defaultValue: true },
    senha: { type: DataTypes.STRING(127), allowNull: false },
    id_status: {
      type: DataTypes.INTEGER, references: {
        model: Status_Cads,
        key: 'id'
      }
    },
}, {});

Usuarios.sp_login = async (login, senha) => {
  return (await db.query("call `sp_login`(?,?);", {
    model: this,
    mapToModel: true,
    replacements: [login, senha]
  }))[0];
}

