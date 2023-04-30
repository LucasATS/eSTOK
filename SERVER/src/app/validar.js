import { Op } from "sequelize";

class forms {

    static FormularioUsuario = async (
        Usuario, {
            Nome = '',
            Email = '',
            senhaReset = '',
            Senha = '',
        }) => { 
        
        Usuario.create({
            Nome: Nome,
            Email: Email,
            senhaReset: senhaReset,
            Senha: Senha,})
            .then( () => {
                console.log(`Usuário ${Nome} cadastrado!`);
            })
            .catch((error) => {
                console.log(`${Nome} : ${error.errors[0].message}`);
            });
        
        
        
    }

    static FormularioProduto = async (
        Produto, {
            id = null,
            Nome = '',
            Descricao = '',
            Foto = '',
        }) => {
        if (id == null){
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