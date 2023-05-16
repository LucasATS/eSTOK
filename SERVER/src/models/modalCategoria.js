import { DataTypes } from 'sequelize';
import db from '../settings/db';
import Status from './modelStatus';

const Categorias = db.define('categorias', {
    descricao: { type: DataTypes.STRING(50), allowNull: false },
    id_status: {
      type: DataTypes.INTEGER, references: {
        model: Status,
        key: 'id'
      }
    },
}, {});

export default Categorias;