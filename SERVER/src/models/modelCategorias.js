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

export default Categorias;