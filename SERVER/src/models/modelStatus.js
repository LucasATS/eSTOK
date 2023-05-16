import { DataTypes } from 'sequelize';
import db from '../settings/db';

const Status_cads = db.define('status_cads', {
    descricao: { type: DataTypes.STRING(30), allowNull: false, unique: true },
}, {});

export default Status_cads;