const JWT = require('jsonwebtoken');
import 'dotenv/config';
import { Op } from "sequelize";
import modelUsuarios from '../models/modelUsuarios';

const FormularioAuthentic = async ( body ) => {
    
    const { login, senha } = body;
    const email = login;

    if (!senha || !(email || login)){
        return { is_valid: false }
    }

    const user = await modelUsuarios.login(login, senha);

    console.log(user);

    if (!user){
        return { is_valid: false }
    }
    
    let Token = await JWT.sign({
        id: user.id,
        usuario: user.email,
    }, process.env.SECRETKEY);
    
    return {is_valid: true, sessao: Token}
}

export default FormularioAuthentic;