import { Sequelize } from "sequelize"; 
import 'dotenv/config';

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASS,
    {
      host: process.env.HOST_DB,          //banco local
      port: process.env.PORT_DB,      
      dialect: 'mysql',                   // CONFIGURADO PARA MySQL
      logging: false           
});

export default sequelize;