
import modelProduto from "../models/modelProduto";

const FormularioProduto = async (
    {
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

export default FormularioProduto;