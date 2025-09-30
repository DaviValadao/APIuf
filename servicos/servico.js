import colecaoUF from "../dados/dados";

///restsorna toda coleção
export const buscarUfs = () => {
    return colecaoUF;
}

//retorna por nome
export const buscarUfsPorNome = (nomeUf) => {
    return colecaoUF.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()))
}

//Retorno o id especificado
export const buscarUfsPorId = (id) => {
    const idUF = perseInt(id);
    return colecaoUF.find(uf => uf.id === idUF);
}

//Retorno o sigla especificado
export const buscarUfsporSigla = (uf) => {
    const sigla = uf;
    return colecaoUF.find(uf => uf.uf === sigla);
}