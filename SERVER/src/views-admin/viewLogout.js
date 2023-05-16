
const logout = async (req, res) => {
    res.clearCookie('sessao');
    res.status(200).json({data : 'Sessão encerrada'});
};

export default logout;