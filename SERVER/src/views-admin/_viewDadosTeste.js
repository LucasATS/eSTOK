import { adicionarDadosTest } from '../tools/DAO';
import Status from '../models/modelStatus';
import Usuario from '../models/modelUsuarios';

const view = async (req, res) => {
    adicionarDadosTest(Status, Usuario);
    res.status(201).json({data : 'dados Adicionados'});
};

export default view;