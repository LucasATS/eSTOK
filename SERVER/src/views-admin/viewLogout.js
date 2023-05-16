
const logout = async (req, res) => {
    res.clearCookie('sessao');
    res.redirect('/admin');
};

export default logout;