import { DataTypes } from 'sequelize';
import db from '../settings/db';
import { Produto } from './modelProduto';
import { KardexTipo } from './modelKardexTipo';


 export const Unidade = db.define('unidade', {
    descricao: { type: DataTypes.STRING(50), allowNull: false },
    id_produto: {
      type: DataTypes.INTEGER, references: {
        model: Produto,
        key: 'id'
      }
    },
    kar_tipo: {
        type: DataTypes.INTEGER, references: {
          model: KardexTipo,
          key: 'id'
        }
      },
    saldo: {type: DataTypes.STRING(11), allowNull: false }
}, {});