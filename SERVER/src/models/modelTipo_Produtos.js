import { DataTypes } from 'sequelize';
import db from '../settings/db';
import Status from './modelStatus_Cads';

const Tipo_Produtos = db.define('tipo_produtos', {
    descricao: { type: DataTypes.STRING(100), allowNull: false },
    id_status: {
      type: DataTypes.INTEGER, references: {
        model: Status,
        key: 'id'
      }
    },
}, {});

export default Tipo_Produtos;