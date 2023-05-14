import db from '../settings/db';

const Produto = db.define('Produtos', {
  Nome: { type: DataTypes.STRING(127), allowNull: false },
  Descricao: { type: DataTypes.STRING(127), allowNull: false, unique: true },
  Foto: { type: DataTypes.BLOB(), allowNull: true }
}, {});

export default Produto;