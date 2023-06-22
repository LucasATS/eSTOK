import { indexAdmin } from "../templates";

const homeAdmin = async (req, res) => {

    try {

        res.sendFile('index.html',{ root: indexAdmin });
        
    } catch (error) {
        
        if (req.status_debug){
            res.status(400).json({ error: error });
        } else {
            res.status(400).json({ error: 'Erro inesperado' });
        }
    }

};

export default homeAdmin;