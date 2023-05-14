import db from '../settings/db';

const Empresa = db.define('empresa', {
    razao_social: { type: DataTypes.STRING(255), allowNull: false },
    nome_fantasia: { type: DataTypes.STRING(255), allowNull: false },
    telefone: { type: DataTypes.STRING(14), allowNull: false },
    email: { type: DataTypes.STRING(255), allowNull: false },
    id_status: {
      type: DataTypes.INTEGER, references: {
        model: Status,
        key: 'id',
      }
    },
}, {});

export default Empresa;