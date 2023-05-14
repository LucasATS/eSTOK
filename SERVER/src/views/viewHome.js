import { indexPortalWeb } from "../templates";

const home = async (req, res) => {
    res.sendFile('index.html',{ root: indexPortalWeb});
};

export default home;