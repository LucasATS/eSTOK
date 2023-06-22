import { indexAdmin } from "../templates";

const homeAdmin = async (req, res) => {

    try {

        return res.sendFile('index.html',{ root: indexAdmin });
        
    } catch (error) {
        
        if (req.status_debug){
            error["params"] = req.query || req.body;
            return res.status(400).json({ error: error });
        } else {
            return res.status(400).json({ error: 'Erro inesperado' });
        }
    }

};

export default homeAdmin;