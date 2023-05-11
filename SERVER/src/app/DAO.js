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


/**
cpf: { type: DataTypes.STRING(11), allowNull: false, unique: true },
      nome: { type: DataTypes.STRING(127), allowNull: false },
      login: { type: DataTypes.STRING(25), allowNull: false, unique: true },
      email: { type: DataTypes.STRING(127), allowNull: false, unique: true },
      senha_reset: { type: DataTypes.BOOLEAN(), allowNull: false, defaultValue: true },
      senha: { type: DataTypes.STRING(127), allowNull: false },
      id_status: {
        type: DataTypes.INTEGER, references: {
          model: Status,
          key: 'id'
        }
      },
 */

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