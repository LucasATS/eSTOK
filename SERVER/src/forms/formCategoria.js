const JWT = require('jsonwebtoken');
import 'dotenv/config';
import { Op } from "sequelize";
import modelCategoria from '../models/modalCategoria';
import DAO from '../tools/DAO';

const form = async (
    {
        descricao
    }) => {
    
    if (!descricao){
        return { is_valid: false , message: 'Descrição é obrigatório'}
    }

    const resp =  await DAO.save(modelCategoria,{descricao: descricao})

    if (resp == 'sucess'){
        return { is_valid: true , message: 'Categoria cadastrada com sucesso!'}
    } else {
        return { is_valid: false , message: resp}
    }

}

export default form;