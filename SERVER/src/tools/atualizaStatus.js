import bancoDeDados from '../settings/db';

const atualizaStatus = async (tabela, id_status, campo, chave) => {
    bancoDeDados.query("UPDATE (?) SET id_status = (?) WHERE (?)")
}

export default bancoDeDados;