import { indexPortalWeb } from "../templates";

const view = async (req, res) => {

    try {

        return res.sendFile('index.html',{ root: indexPortalWeb});
        
    } catch (error) {
        
        if (req.status_debug){
            error["params"] = req.query || req.body;
            return res.status(400).json({ error: error });
        } else {
            return res.status(400).json({ error: 'Erro inesperado' });
        }

    }

};

export default view;