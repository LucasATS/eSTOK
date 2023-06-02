import { DataTypes, QueryTypes } from 'sequelize';
import { Categorias } from './modelCategorias';
import { Tipo_Produtos } from './modelTipo_Produtos';
import { Unidades } from './modelUnidades';
import { Status_Cads } from './modelStatus_Cads';
import db from '../settings/db';

export const Produtos = db.define('produtos', {
  Nome: { type: DataTypes.STRING(127), allowNull: false },
  Descricao: { type: DataTypes.STRING(127), allowNull: false, unique: true },
  id_categoria: {
    type: DataTypes.INTEGER, references: {
      model: Categorias,
      key: 'id'
    }
  },
  id_tp_produto: {
    type: DataTypes.INTEGER, references: {
      model: Tipo_Produtos,
      key: 'id'
    }
  },
  id_unidade: {
    type: DataTypes.INTEGER, references: {
      model: Unidades,
      key: 'id'
    }
  },
  Foto: { type: DataTypes.BLOB(), allowNull: true },
  fungibilidade: { type: DataTypes.BOOLEAN, allowNull: false },
  estocavel: { type: DataTypes.BOOLEAN, allowNull: false },
  id_status: {
    type: DataTypes.INTEGER, references: {
      model: Status_Cads,
      key: 'id'
    }
  },
}, {});

Produtos.vw_produtos = async () => {
  const data = await db.query(
    "SELECT * FROM vw_produtos_cadastro",
    {
      model: this,
      mapToModel: true,
      type: QueryTypes.SELECT
    }
  );
  return data;
}

Produtos.sp_produtos = async (nome, descricao, id_categoria, id_tp_produto, id_unidade, foto, fungibilidade, estocavel) => {
  
  return (await db.query("call `sp_produtos`(?, ?, ?, ?, ?, ?, ?, ?, ?);", {
    model: this,
    mapToModel: true,
    replacements: [nome, descricao, id_categoria, id_tp_produto, id_unidade, foto, fungibilidade, estocavel, 1]
  }))[0];
}