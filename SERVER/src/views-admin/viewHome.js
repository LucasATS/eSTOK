import { indexAdmin } from "../templates";

const homeAdmin = async (req, res) => {
    res.sendFile('index.html',{ root: indexAdmin });
};

export default homeAdmin;