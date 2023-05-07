// COMO USAR O SEQUELIZE >> https://sequelize.org/docs/v6/core-concepts/model-basics/
import { Sequelize, DataTypes } from 'sequelize';
import 'dotenv/config';

const config = {
  timestamps: true,
  createdAt: 'DataCadastro',
  updatedAt: 'DataAtualizado'
}

var sequelize = null;

class models {

  constructor() {
    // CONEXÃO - SQLITE
    sequelize = new Sequelize({
      dialect: 'sqlite',             // CONFIGURADO PARA SQLite
      storage: process.env.DATABASE, // PUXA A INFORMAÇÃO DATABASE DO ENV
      logging: false,                // SERVE PARA ELE NÃO FICAR PRINTANDO O TEMPO TODO
    });
  }

  //MODELS
  init = async function (force = false) {
    force && console.warn('\n\n\n\tFORCE ESTA ATIVO!\n\n');

    // DADOS USUÁRIO
    const Usuario = sequelize.define('Usuarios', {
      Nome: { type: DataTypes.STRING(127), allowNull: false },
      Email: { type: DataTypes.STRING(127), allowNull: false, unique: true },
      SenhaReset: { type: DataTypes.BOOLEAN(), allowNull: false, defaultValue: true },
      Senha: { type: DataTypes.STRING(127), allowNull: false },
    }, config);

    const Produto = sequelize.define('Produtos', {
      Nome: { type: DataTypes.STRING(127), allowNull: false },
      Descricao: { type: DataTypes.STRING(127), allowNull: false, unique: true },
      Foto: { type: DataTypes.BLOB(), allowNull: true }
    }, config);

    // ... ADICIONAR MAIS MODELS AQUI ...

    // GERAR BANCO DE DADOS
    await sequelize.sync({ force: force }); // force === True: Usar apenas se quiser reiniciar o BD apenas para testes
    console.log("\nTodas as Models foram atualizadas!\n");

    return {
      Usuario, Produto
    };
  }
}

export default new models();