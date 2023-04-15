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
      Email: { type: DataTypes.STRING(127), allowNull: false },
      CPF: { type: DataTypes.STRING(11), allowNull: false },
      CEP: { type: DataTypes.STRING(8), allowNull: false },
      Telefone: { type: DataTypes.STRING(16), allowNull: false },
      Senha: { type: DataTypes.STRING(127), allowNull: false },
    }, config);

    // ... ADICIONAR MAIS MODELS AQUI ...

    // GERAR BANCO DE DADOS
    await sequelize.sync({ force: force }); // force === True: Usar apenas se quiser reiniciar o BD apenas para testes
    console.log("\nTodas as Models foram atualizadas!\n");

    return {
      Usuario,
    };
  }
}

export default new models();