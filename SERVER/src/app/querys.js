import DAO from "./DAO";

class query {

    //testes
    static userStatus_1 = async (model) => {

        const user = await this.modelos.Usuario({
            raw: true,
            attributes: ['nome', 'email', 'senha'],
            include: [
                {   model: models.Status,
                    required: true,
                    attributes:['descricao']
                }
            ],
            where: {
                id_status: 1
            }
        });
    
        return user
    }
    
}

export default query;