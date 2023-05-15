import { indexPortalWeb } from "../templates";

const view = async (req, res) => {
    res.sendFile('index.html',{ root: indexPortalWeb});
};

export default view;