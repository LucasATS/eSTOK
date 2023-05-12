import DAO from "./DAO";

class query {

    //testes
    static userStatus_1 = async (models) => {

        const user = DAO.all((await models).Usuario, {
            raw: true,
            attributes: ['nome', 'email', 'senha'],
            include: [
                {   model: (await models).Status,
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