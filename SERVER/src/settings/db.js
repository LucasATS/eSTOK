import { Sequelize } from "sequelize"; 
import 'dotenv/config';

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASS,
    {
      host: process.env.HOST,             //banco local
      dialect: 'mysql',                   // CONFIGURADO PARA MySQL
      logging: false           
});

export default sequelize;