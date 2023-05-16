const JWT = require("jsonwebtoken");
import "dotenv/config";

const UserIsAuthentic = async (req, res, next) => {
  let auth = null;

  try {
    auth = req.cookies.sessao;
  } catch (error) {
    return res.json({ return: "Não Autenticado" });
  }

  if (typeof auth == "undefined" || auth == "" || auth == null) {
    res.clearCookie("sessao");
    return res.json({ return: "Não Autenticado" });
  } else {
    try {
<<<<<<< HEAD:SERVER/src/app/util.js
      let Token = JWT.verify(auth, process.env.SECRETKEY);
      req.user = await Token.id;
      next();
    } catch (err) {
      res.clearCookie("sessao");
      return res.json({ return: "Não Autenticado" });
=======
        auth = req.cookies.sessao;    
    } catch (error) {
        return res.status(401).json({data : 'Não Autenticado'})
>>>>>>> 954d418c9a36c07c7b4c269026804c02dee5dac5:SERVER/src/tools/verificaAutenticacao.js
    }
  }
};

<<<<<<< HEAD:SERVER/src/app/util.js
export { UserIsAuthentic };
=======
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
>>>>>>> 954d418c9a36c07c7b4c269026804c02dee5dac5:SERVER/src/tools/verificaAutenticacao.js
