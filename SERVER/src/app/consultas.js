
class query {
    static getUser = async (
        Usuario, {
            id = null
        }) => {

        const user = await Usuario.findOne({
            attributes: ['nome', 'email', 'senha'],
            where: {
                Id: id
            }
        });
    
        return user
    }
    
}

export default query;