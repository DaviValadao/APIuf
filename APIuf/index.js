import express from 'express';
import { buscarUfs, buscarUfsPorId, buscarUfsPorNome, buscarUfsporSigla} from './servicos/servico.js';

const app = express();

app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca; ///permite buscas por valor => (exemplo)"mato"
    const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : colecaoUf;

    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).send({"erro" : "Nenhuma UF encontrada"})
    }
});

app.get('/ufs/:iduf', (req, res) => {
    const idUF = buscarUfsPorId(req.params.iduf);
    const uf = buscarUfsPorId(idUf)

    if (uf) {
        res.json(uf);
    }else if (isNaN(perseInt(req.params.iduf))) {
        res.status(400).send({"erro": "Requisição Inválida"});
    }else{
        res.status(404).send({"erro": "ID não encontrada"})
    }
})

app.get('/ufs/:iduf', (req, res) => { ///rota para pesquisar por ID
    const idUf = parseint(req.params.iduf);
    let mensagemErro = '';
    let uf;

    if (!(isNaN(idUf))) {
        uf = colecaoUf.find(u => u.id === idUf);
        if (!uf) {
            mensagemErro = 'UF não encontrada';
        };
    } else {
        mensagemErro = 'Requisição invalida';
    };

    if (uf) {
        res.json(uf);
    } else {
        res.status(404).json({ "erro": mensagemErro });
    };
});

app.get('ufs/:siuf', (req, res) => {
    const siuf = buscarUfsporSigla(req.params.uf);
    const sigla = buscarUfsporSigla(siuf)
    return colecaoUF.find(uf => uf.uf === sigla);


})

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado na porta 8080 em: ' + data)
});

//tratar erros (talvez) 
//    fetch('/ufs/:siuf', (req, res) => then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json(); // or .text(), .blob(), etc.
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   }));