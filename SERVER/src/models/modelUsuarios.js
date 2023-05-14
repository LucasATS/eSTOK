import db from '../settings/db';

export default Usuario = db.define('Usuarios', {
    cpf: { type: DataTypes.STRING(11), allowNull: false, unique: true },
    nome: { type: DataTypes.STRING(127), allowNull: false },
    login: { type: DataTypes.STRING(25), allowNull: false, unique: true },
    email: { type: DataTypes.STRING(127), allowNull: false, unique: true },
    senha_reset: { type: DataTypes.BOOLEAN(), allowNull: false, defaultValue: true },
    senha: { type: DataTypes.STRING(127), allowNull: false },
    id_status: {
      type: DataTypes.INTEGER, references: {
        model: Status,
        key: 'id'
      }
    },
}, {});
