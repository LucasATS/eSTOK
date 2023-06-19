import { DataTypes, QueryTypes } from 'sequelize';
import db from '../settings/db';
import { KardexTipos } from './modelKardexTipos';
import { Produtos } from './modelProdutos';

export const Baixa_Estoques = db.define('baixa_estoques', {
  id_produto: {
    type: DataTypes.INTEGER, references: {
      model: Produtos,
      key: 'id'
    }
  },
  lote: { type: DataTypes.STRING(10), allowNull: false },
  validade: { type: DataTypes.DATE, allowNull: false },
  quantidade: { type: DataTypes.INTEGER, allowNull: false },
  unitario: { type: DataTypes.DECIMAL(15, 4), allowNull: false },
  total: { type: DataTypes.DECIMAL(15, 4), allowNull: false },
  motivo: { type: DataTypes.STRING(255), allowNull: false },
  observacao: {type: DataTypes.STRING(255), allowNull: true},
  kar_tipo: {
    type: DataTypes.INTEGER, references: {
      model: KardexTipos,
      key: 'id'
    }
  },
}, {});

Baixa_Estoques.vw_baixa_estoques = async (id_produto) => {
  const data = await db.query(
    "SELECT * FROM vw_baixa_estoques vw WHERE vw.id = (?)"/*O Valor de ID deve ser passado no formato string exepmlo "#1"*/,
    {
      replacements: [id_produto],
      type: QueryTypes.SELECT
    }
  );
  return data;
}


Baixa_Estoques.sp_baixa_estoque = async (id_produto, lote, validade, quantidade, unitario, total, motivo, observacao) => {
  return (await db.query("call sp_baixa_estoque(?, ?, ?, ?, ?, ?, ?, ?, ?);", {
    model: this,
    mapToModel: true,
    replacements: [id_produto, lote, validade, quantidade, unitario, total, motivo, observacao, 2]
  }))[0];
}