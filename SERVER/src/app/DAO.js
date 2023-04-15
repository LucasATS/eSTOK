import { Op } from "sequelize";

// AQUI SERVE APENAS DE EXEMPLO PARA TESTES
const adicionarDadosTest = async (models) => {
    await criarUsuario((await models).Usuario, {
        Nome: 'Thalia',
        Email: 'thalia@email.com',
        CEP: '12345678',
        CPF: '12345678900',
        Telefone: '1234567890',
        Senha: 'senha123',
    });
    await criarUsuario((await models).Usuario, {
        Nome: 'Gaikko',
        Email: 'Gaikko@email.com',
        CEP: '12345678',
        CPF: '12345678900',
        Telefone: '1234567890',
        Senha: 'senha123',
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

const criarUsuario = async (
    Usuario, {
        Nome = '',
        Email = '',
        CEP = '',
        CPF = '',
        Telefone = '',
        Senha = '',
    }) => {

    // VALIDA SE JÁ EXISTE UM CADASTRADO
    // REGRAS: APENAS UM EMAIL, CPF e TELEFONE POR USUÁRIO    
    try {
        const user = await Usuario.findOne({
            attributes: ['Email', 'Nome', 'CPF', 'Telefone'],
            where: {
                [Op.or]: [{ Email }, { CPF }, { Telefone }]
            }
        });
        if ((await user).Email === Email) return console.log(`${Nome}: Já existe um Email cadastrado!`);
        if ((await user).Telefone === Telefone) return console.log(`${Nome}: Já existe um Telefone cadastrado!`);
        if ((await user).CPF === CPF) return console.log(`${Nome}: Já existe um CPF cadastrado!`);

    } catch (e) { }

    Usuario.create({
        Nome: Nome,
        Email: Email,
        CEP: CEP,
        CPF: CPF,
        Telefone: Telefone,
        Senha: Senha,
    });

    console.log(`Usuário ${Nome} cadastrado!`);
}

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

export default adicionarDadosTest;
export { criarUsuario, BuscarUsuario, BuscarVariosUsuarios };