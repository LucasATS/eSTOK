import { DataTypes } from 'sequelize';
import db from '../settings/db';
import Status from './modelStatus';

const Usuario = db.define('Usuarios', {
    id_produto: {
        type: DataTypes.INTEGER, references: {
          model: Status,
          key: 'id'
        },
    saldo: { type: DataTypes.STRING(11), allowNull: false },
    data_compra: { type: DataTypes.DATE(), allowNull: false },
    data_validade: { type: DataTypes.DATE(), allowNull: false }
    },
}, {});

export default Usuario;