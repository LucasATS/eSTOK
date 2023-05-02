
class query {
    static getUser = async (
        Usuario, {
            id = null
        }) => {

        const user = await Usuario.findOne({
            attributes: ['Nome', 'Email', 'SenhaReset'],
            where: {
                Id: id
            }
        });
    
        return user
    }
    
}

export default query;