import { DataTypes } from 'sequelize';
import db from '../settings/db';

 export const KardexTipo = db.define('kardex_tipo', {
    descricao: { type: DataTypes.STRING(50), allowNull: false },
}, {});

export default KardexTipo