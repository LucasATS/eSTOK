import { DataTypes, QueryTypes } from 'sequelize';
import { Produtos } from './modelProdutos';
import { Status_Cads } from './modelStatus_Cads';
import db from '../settings/db';

export const Lotes = db.define('lotes', {
  id_produto: {
    type: DataTypes.INTEGER, references: {
      model: Produtos,
      key: 'id'
    }
  },
  lote: { type: DataTypes.STRING(10), allowNull: false },
  qtde_lote: { type: DataTypes.INTEGER, allowNull: false },
  validade: { type: DataTypes.DATE, allowNull: false },
  id_status: {
    type: DataTypes.INTEGER, references: {
      model: Status_Cads,
      key: 'id'
    }
  },
}, {});

Lotes.vw_lotes = async () => {
  const data = await db.query(
    "SELECT * FROM vw_lotes",
    {
      type: QueryTypes.SELECT
    }
  );
  return data;
}

Lotes.sp_lotes = async (id_produto, lote, qtde_lote, validade, id_status) => {
  return (await db.query("call `sp_lotes`(?, ?, ?, ?, ?);", {
    model: this,
    mapToModel: true,
    replacements: [id_produto, lote, qtde_lote, validade, id_status]
  }))[0];
}