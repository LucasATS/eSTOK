import bancoDeDados from '../settings/db';
import { Op, QueryTypes } from 'sequelize';

class DAO {
    static get = async ( model , fields ) => {

        const data = await model.findOne({
            where: fields
        });

        try {
            return data.dataValues;
        } catch (error) {
            return null;
        }
        
        
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
            fields[key] = {[Op.like] : `%${fields[key]}%`};
        }

        const conditions = {};

        if (keys.length > 0) conditions['where'] = fields;
        
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

    static atualizaStatus = async (model, chave, Ativo = true) => {
        let strTabela = model.tableName;
        let id_status = Ativo ? 1 : 2;
        return await bancoDeDados.query(`UPDATE (${strTabela}) SET id_status = (?) WHERE id = (?)`, {
            replacements: [id_status, chave]
        })
    }

}

export default DAO;