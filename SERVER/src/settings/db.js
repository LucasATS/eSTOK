import { Sequelize } from "sequelize"; 
import 'dotenv/config';

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASS,
    {
      host: 'localhost',             //banco local
      dialect: 'mysql'             // CONFIGURADO PARA MySQL
});

export default sequelize;