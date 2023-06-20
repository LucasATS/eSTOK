import { DataTypes, QueryTypes } from 'sequelize';
import db from '../settings/db';
import { Status_Cads } from './modelStatus_Cads';

export const Tipo_Produtos = db.define('tipo_produtos', {
  descricao: { type: DataTypes.STRING(100), allowNull: false },
  id_status: {
    type: DataTypes.INTEGER, references: {
      model: Status_Cads,
      key: 'id'
    }
  },
}, {});

Tipo_Produtos.vw_tipo_produto = async (id_status) => {
  const data = await db.query(
    "SELECT * FROM vw_tipo_produtos WHERE Status = (?)",
    {
      type: QueryTypes.SELECT,
      replacements: [id_status]
    }
  );
  return data;
}

Tipo_Produtos.sp_tipo_produto = async (descricao, id_status) => {
  return (await db.query("call sp_tipo_produtos(?,?);", {
    model: this,
    mapToModel: true,
    replacements: [descricao, id_status]
  }))[0];
}