import { Op } from "sequelize";
const JWT = require('jsonwebtoken');
import 'dotenv/config';

class forms {

    static FormularioAuthentic = async (Usuario,
        {
            email = '',
            senha = '',
        }) => {
        
        if (!email, !senha){
            return { is_valid: false }
        }

        const user = await Usuario.findOne({
            attributes: ['id', 'email', 'senha'],
            where: {
                [Op.and]: [
                    { email },
                    { senha },
                ]
            }
        });

        if (!user){
            return { is_valid: false }
        }
        
        let Token = await JWT.sign({
            id: user.id,
            usuario: user.email,
        }, process.env.SECRETKEY);
        
        return {is_valid: true, sessao: Token}
    }
    
    //Só exemplo
    static FormularioProduto = async (
        Produto, {
            id = null,
            Nome = '',
            Descricao = '',
            Foto = '',
        }) => {
        if (id == null){
            //INSERT PRODUTO
            Produto.create({
                Nome: Nome,
                Descricao: Descricao,
                Foto: Foto,
                })
                .then( () => {
                    console.log(`Produto ${Nome} cadastrado!`);
                    return 'sucess';
                })
                .catch((error) => {
                    console.log(`${Nome} : ${error.errors[0].message}`);
                    return error.errors[0].message;
                });
        } else {
            //UPDATE PRODUTO
            Produto.update(
                { 
                    Nome: Nome,
                    Descricao: Descricao,
                    Foto: Foto, 
                },
                { where: { id: id } }
                )
                .then( () => {
                    console.log(`Produto ${Nome} atualizado!`);
                    return "success";
                })
                .catch((error) => {
                    console.log(`${Nome} : ${error.errors[0].message}`);
                    return error.errors[0].message;
                });
        }
    }
}

export default forms;