import { Categorias } from '../models/modelCategorias';

const form = async ( body ) => {
    
    let { descricao } = body;

    if (!descricao){
        return { is_valid: false , message: 'Descrição é obrigatório'}
    }

    const resp =  await Categorias.sp_categorias(descricao)

    return { is_valid: true , message: resp.Msg}

}

export default form;