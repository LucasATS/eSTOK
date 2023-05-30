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
            return model.create( fields ) 
                .then( () => { 
                    console.log(`Insert in ${model.name} realized!`); 
                    return 'success'; 
                }) 
                .catch((error) => { 
                    console.log(`Error in INSERT ${model.name} : ${error}`); 
                    return error; 
                }); 

         } else { 

            //UPDATE MODEL
            return model.update( 
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

    static filter = async ( model , fields, fieldsout = null ) => {
        
        const keys = Object.keys(fields);
        
        for (const key of keys) {
            fields[key] = `%${fields[key]}%`
        }
        
        const conditions = {
            where: { [Op.like]: fields }
        }
        
        if (fieldsout != null){
            conditions['attributes'] = fieldsout;
        }

        const data = await model.findAll(conditions);

        return data
    }

    static all = async ( model , conditions = {} ) => {

        const data = await model.findAll(conditions);

        return data
    }

}

export default DAO;
export { adicionarDadosTest };