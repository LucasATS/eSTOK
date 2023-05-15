
const logout = async (req, res) => {
    res.clearCookie('sessao');
    res.redirect('/operador');
};

export default logout;