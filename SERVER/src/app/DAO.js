
// AQUI SERVE APENAS DE EXEMPLO PARA TESTES
const adicionarDadosTest = async (models) => {

    //CRIA STATUS
    await DAO.save((await models).Status,
        {
            descricao: ' teste teste',
        }
    );
    
    //CRIA USUARIO Gaikko
    await DAO.save((await models).Usuario, {
        cpf: '00000000002',
        nome: 'Gaikko',
        login: 'Gaikko',
        email: 'Gaikko@email.com',
        senha: 'senha123',
        id_status: 1
    });
    
    //CRIA USUARIO Thalia
    await DAO.save((await models).Usuario, {
        cpf: '00000000001',
        nome: 'Thalia',
        login: 'LTS',
        email: 'Thalia@email.com',
        senha: 'senha123',
        id_status: 1
    });
}

class DAO {
    static get = async ( model , fields ) => {

        const data = await model.findOne({
            where: fields
        });
        
        return data;
        
    }

    static save = async ( model , fields ) => {
        
        //CAPTURA ID E REMOVE DE FIELDS
        const id = fields.id;
        delete fields.id;

        // SE NÃO HOUVER ID EXECUTA INSERT DO CONTRARIO UPDATE
        if ( !id ){

            //INSERT MODEL
            model.create( fields ) 
                .then( () => { 
                    console.log(`Insert in ${model.name} realized!`); 
                    return 'sucess'; 
                }) 
                .catch((error) => { 
                    console.log(`Error in INSERT ${model.name} : ${error}`); 
                    return error; 
                }); 

         } else { 

            //UPDATE MODEL
            model.update( 
                fields , 
                { where: { id: id } } 
            ) 
                .then( () => { 
                    console.log(`Update in ${model.name} realized!`); 
                    return "success"; 
                }) 
                .catch((error) => { 
                    console.log(`Error in UPDATE ${model.name} : ${error}`); 
                    return error; 
                }); 

         }
    }

    static filter = async ( model , fields ) => {
    
        const keys = Object.keys(fields);
        for (const key of keys) {
            fields[key] = `%${fields[key]}%`
        }
        
        const data = await model.findAll({
            where: { fields }
        });

        return data
    }

    static all = async ( model , conditions = {} ) => {

        const data = await model.findAll(conditions);

        return data
    }

}

export default DAO;
export { adicionarDadosTest };