
const logout = async (req, res) => {

    try {

        res.clearCookie('sessao');
        res.status(200).json({data : 'Sessão encerrada'});
        
    } catch (error) {
        
        if (req.status_debug){
            res.status(400).json({ error: error });
        } else {
            res.status(400).json({ error: 'Erro inesperado' });
        }
    }

};

export default logout;