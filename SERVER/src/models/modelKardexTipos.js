import { DataTypes } from 'sequelize';
import db from '../settings/db';

 export const KardexTipos = db.define('kardex_tipos', {
    descricao: { type: DataTypes.STRING(50), allowNull: false },
}, {});

export default KardexTipos