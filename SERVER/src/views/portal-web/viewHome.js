
const home = async (req, res) => {
    res.sendFile('index.html',{ root: this.PATH + '/web/public' });
};

export default home;