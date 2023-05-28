import { Categorias } from '../models/modelCategorias';
import DAO from '../tools/DAO';

const form = async ( body ) => {
    
    let { descricao } = body;

    if (!descricao){
        return { is_valid: false , message: 'Descrição é obrigatório'}
    }

    const resp =  await DAO.save(Categorias,{descricao: descricao, id_status: 1})

    if (resp == 'sucess'){
        return { is_valid: true , message: 'Categoria cadastrada com sucesso!'}
    } else {
        return { is_valid: false , message: resp}
    }

}

export default form;