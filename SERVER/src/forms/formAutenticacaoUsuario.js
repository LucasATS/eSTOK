const JWT = require('jsonwebtoken');
import 'dotenv/config';
import { Op } from "sequelize";
import { Usuarios } from '../models/modelUsuarios';

const FormularioAuthentic = async ( body ) => {
    
    const { login, senha } = body;
    const email = login;

    if (!senha || !(email || login)){
        return { is_valid: false }
    }

    const user = (await Usuarios.sp_login(login, senha))[0];

    console.log(user);

    if (!user.login){
        return { is_valid: false, msg: user.Msg}
    }
    
    const Token = await JWT.sign({
        usuario: user.login,
    }, process.env.SECRETKEY);
    
    return {is_valid: true, sessao: Token, msg: user.Msg}
}

export default FormularioAuthentic;