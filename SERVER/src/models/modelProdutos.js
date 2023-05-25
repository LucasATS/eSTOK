import { DataTypes } from 'sequelize';
import db from '../settings/db';

const Produtos = db.define('Produtos', {
  Nome: { type: DataTypes.STRING(127), allowNull: false },
  Descricao: { type: DataTypes.STRING(127), allowNull: false, unique: true },
  Foto: { type: DataTypes.BLOB(), allowNull: true }
}, {});

export default Produtos;