import { DataTypes } from 'sequelize';
import db from '../settings/db';

export const Status_Cads = db.define('status_cads', {
    descricao: { type: DataTypes.STRING(30), allowNull: false, unique: true },
}, {});

Status_Cads.vw_status_cads = async () => {
    return await db.query("SELECT * FROM vw_status_cads", {
      model: this,
      mapToModel: true
    });
}
