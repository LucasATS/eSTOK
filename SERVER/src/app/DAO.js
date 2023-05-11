import { Op } from "sequelize";

// AQUI SERVE APENAS DE EXEMPLO PARA TESTES
const adicionarDadosTest = async (models) => {

    await criarStatus((await models).Status, {
        descricao: ' teste teste',
    });

    await criarUsuario((await models).Usuario, {
        cpf: '00000000002',
        nome: 'Gaikko',
        login: 'Gaikko',
        email: 'Gaikko@email.com',
        senha: 'senha123',
        id_status: 1
    });
    
    await criarUsuario((await models).Usuario, {
        cpf: '00000000001',
        nome: 'Thalia',
        login: 'LTS',
        email: 'Thalia@email.com',
        senha: 'senha123',
        id_status: 1
    });

    // let user = await BuscarUsuario((await models).Usuario, {
    //     id: 2
    // });
    // console.log(user.Nome);

    // user = await BuscarUsuario((await models).Usuario, {
    //     Telefone: '1234567890'
    // });
    // console.log(user.Nome);

    // user = await BuscarUsuario((await models).Usuario, {
    //     CPF: '12345678900'
    // });
    // console.log(user.Nome);

    // let users = await BuscarVariosUsuarios((await models).Usuario, {
    //     Nome: 'Thalia'
    // });
    // const nomes = users.map(user => user.Nome);
    // console.log('Usuários: ', nomes);
}

class DAO {
    static get = async ( model , fields ) => {

        const data = await model.findOne({
            where: fields
        });
        
        return data;
        
    }

    static save = async ( model , fields ) => {
        
        const id = fields.id;
        delete fields.id;

        if ( !id ){

             //INSERT MODEL
             model.create( fields ) 
                 .then( () => { 
                     console.log(`Insert in ${model} realized!`); 
                     return 'sucess'; 
                 }) 
                 .catch((error) => { 
                     console.log(`Error in INSERT ${model} : ${error.errors[0].message}`); 
                     return error.errors[0].message; 
                 }); 

         } else { 

             //UPDATE MODEL
             model.update( 
                 fields , 
                 { where: { id: id } } 
             ) 
                 .then( () => { 
                     console.log(`Update in ${model} realized!`); 
                     return "success"; 
                 }) 
                 .catch((error) => { 
                     console.log(`Error in UPDATE ${model} : ${error.errors[0].message}`); 
                     return error.errors[0].message; 
                 }); 

         }
    }

    static filter = async ( model , fields ) => {
        
    }

    static all = async ( model , conditions ) => {
        
    }

}

const criarStatus = async (
    Status, {
        descricao = '',
    }) => {

    // VALIDA SE JÁ EXISTE UM CADASTRADO
    // REGRAS: APENAS UM EMAIL, CPF e TELEFONE POR USUÁRIO    
    
    Status.create({
        descricao: descricao
        })
        .then( () => {
            console.log(`Status ${descricao} cadastrado!`);
        })
        .catch((error) => {
            console.log(`${descricao} : ${error}`);
        });
}

const criarUsuario = async (
    Usuario, {
        cpf = '',
        nome = '',
        login = '',
        email = '',
        senha = '',
        id_status = ''
    }) => {

    // VALIDA SE JÁ EXISTE UM CADASTRADO
    // REGRAS: APENAS UM EMAIL, CPF e TELEFONE POR USUÁRIO    
    
    Usuario.create({
        cpf : cpf,
        nome: nome,
        login: login,
        email: email,
        senha: senha,
        id_status: id_status,
        })
        .then( () => {
            console.log(`Usuário ${nome} cadastrado!`);
        })
        .catch((error) => {
            console.log(`${nome} : ${error}`);
        });
}
 /*
const BuscarUsuario = async (
    Usuario, {
        id = null,
        Email = '',
        CPF = '',
        Telefone = '',
    }) => {
    const user = await Usuario.findOne({
        attributes: ['Nome', 'Email', 'CPF', 'CEP', 'Telefone'],
        where: {
            [Op.or]: [
                { id },
                { Email },
                { CPF },
                { Telefone },
            ]
        }
    });

    return user
}

const BuscarVariosUsuarios = async (
    Usuario, {
        Nome = '',
        CEP = '',
    }) => {
    const users = await Usuario.findAll({
        attributes: ['Nome', 'Email', 'CPF', 'CEP', 'Telefone'],
        where: {
            [Op.or]: [
                { Nome },
                { CEP },
            ]
        }
    });
    return users
}
*/
export default adicionarDadosTest;
export { criarUsuario };