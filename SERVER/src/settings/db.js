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
      dialectOptions: { connectTimeout: 15000 },
      logging: false,
      define: {
        charset: 'utf8',
        collate: 'utf8_general_ci', 
        timestamps: true
      },          
});

export default sequelize;