import { DataTypes } from 'sequelize';
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
  return await db.query("SELECT * FROM vw_estoque_por_lotes", {
  });
}

Estoques.vw_entradas_cadastro = async () => {
  return await db.query("SELECT * FROM vw_entradas_cadastro", {
  });
}
