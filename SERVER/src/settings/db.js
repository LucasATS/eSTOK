import { Sequelize } from "sequelize"; 
import 'dotenv/config';

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASS,
    {
      host: process.env.HOST,             //banco local
      dialect: 'mysql'             // CONFIGURADO PARA MySQL
});

// CONEXÃO - SQLITE
/*
const sequelize = new Sequelize({
  dialect: 'sqlite',             // CONFIGURADO PARA SQLite
  storage: process.env.DATABASE, // PUXA A INFORMAÇÃO DATABASE DO ENV
  logging: false,                // SERVE PARA ELE NÃO FICAR PRINTANDO O TEMPO TODO
});
*/

export default sequelize;