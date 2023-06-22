import { indexPortalWeb } from "../templates";

const view = async (req, res) => {

    try {

        res.sendFile('index.html',{ root: indexPortalWeb});
        
    } catch (error) {
        
        if (req.status_debug){
            res.status(400).json({ error: error });
        } else {
            res.status(400).json({ error: 'Erro inesperado' });
        }

    }

};

export default view;