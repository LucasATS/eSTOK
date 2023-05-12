// COMO USAR O SEQUELIZE >> https://sequelize.org/docs/v6/core-concepts/model-basics/
import { DataTypes } from 'sequelize';
import 'dotenv/config';
import db from '../settings/db';

const config = {
  timestamps: true,
  createdAt: 'Data_cadastro',
  updatedAt: 'Data_atualizado',
  freezeTableName: true
}

class models {

  //MODELS
  init = async function (force = false) {
    force && console.warn('\n\n\n\tFORCE ESTA ATIVO!\n\n');

    // DADOS STATUS
    const Status = db.define('status', {
      descricao: { type: DataTypes.STRING(127), allowNull: false, unique: true },
    }, config);

    console.log(Status.name)
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
    }, config);

    // DADOS USUÁRIO
    const Usuario = db.define('Usuarios', {
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
    }, config);

    const Produto = db.define('Produtos', {
      Nome: { type: DataTypes.STRING(127), allowNull: false },
      Descricao: { type: DataTypes.STRING(127), allowNull: false, unique: true },
      Foto: { type: DataTypes.BLOB(), allowNull: true }
    }, config);

    // ... ADICIONAR MAIS MODELS AQUI ...

    // GERAR BANCO DE DADOS
    await db.sync({ force: force }); // force === True: Usar apenas se quiser reiniciar o BD apenas para testes
    console.log("\nTodas as Models foram atualizadas!\n");

    return {
      Status, Empresa, Usuario, Produto
    };
  }
}

export default new models();