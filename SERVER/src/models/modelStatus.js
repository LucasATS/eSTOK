import { DataTypes } from 'sequelize';
import db from '../settings/db';

const Status = db.define('status', {
    descricao: { type: DataTypes.STRING(127), allowNull: false, unique: true },
}, {});

export default Status;