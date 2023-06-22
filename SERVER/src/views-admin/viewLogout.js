
const logout = async (req, res) => {

    try {

        res.clearCookie('sessao');
        return res.status(200).json({data : 'Sessão encerrada'});
        
    } catch (error) {
        
        if (req.status_debug){
            error["params"] = req.query || req.body;
            return res.status(400).json({ error: error });
        } else {
            return res.status(400).json({ error: 'Erro inesperado' });
        }
    }

};

export default logout;