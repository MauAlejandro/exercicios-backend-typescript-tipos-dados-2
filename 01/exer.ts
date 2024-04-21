const fs = require("fs");

type Usuario = { nome: string; idade: number };

const leitura = (caminho: string): Usuario | boolean => {
let resultado: Usuario | any 
    
    const leitura = fs.readFileSync(caminho);

    if (leitura.length > 0) {
      resultado = JSON.parse(leitura);
  } else {
    resultado = false
  }

  return resultado;
};

const escrita = (conteudo: Usuario | boolean, caminho: string): void => {

    fs.writeFile(caminho, JSON.stringify(conteudo), (err: any) => {
        if (err) {
            console.error('Ocorreu um erro ao escrever no arquivo:', err);
        } else {
            console.log('Os dados foram escritos no arquivo com sucesso.');
        }
    })
}

escrita({nome: "mauricio", idade: 25}, "./bd.json")