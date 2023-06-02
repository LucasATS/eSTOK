import { DataTypes, QueryTypes } from 'sequelize';
import db from '../settings/db';
import { Produtos } from './modelProdutos';

export const Estoques = db.define('estoques', {
  id_produto: {
    type: DataTypes.INTEGER, references: {
      model: Produtos,
      key: 'id'
    },
    quantidade: { type: DataTypes.INTEGER, allowNull: false }
  },
}, {});

Estoques.vw_estoque_por_lotes = async () => {
  const data = await db.query(
    "SELECT * FROM vw_estoque_por_lotes",
    {
      type: QueryTypes.SELECT
    }
  );
  return data;
}

Estoques.vw_entradas_cadastro = async () => {
  const data = await db.query(
    "SELECT * FROM vw_entradas_cadastro",
    {
      type: QueryTypes.SELECT
    }
  );
  return data;
}