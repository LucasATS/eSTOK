
const homeAdmin = async (req, res) => {
    res.sendFile('index.html',{ root: this.PATH + '/web/private' });
};

export default homeAdmin;