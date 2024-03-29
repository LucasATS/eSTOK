const JWT = require('jsonwebtoken');
import 'dotenv/config';

const UserIsAuthentic = async (req, res, next) => {
    let auth = null;
    
    try {
        auth = req.cookies.sessao;    
    } catch (error) {
        return res.status(401).json({data : 'Não Autenticado'})
    }

    if ( typeof(auth) == 'undefined' || auth == '' || auth == null){
        res.clearCookie('sessao');
        return res.status(401).json({data : 'Não Autenticado'})

    } else {
        try {
            let Token = JWT.verify(auth, process.env.SECRETKEY);
            req.user = await Token.id;
            next();
        } catch (err) {
            res.clearCookie('sessao');
            return res.status(401).json({data : 'Não Autenticado'})
            
        }
    }
}

export default UserIsAuthentic ;