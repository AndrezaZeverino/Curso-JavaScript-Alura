console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array (
    `Salvador`,
    `SP`,
    `RJ`
);

const idadeComprador = 15;
const estaAcompanhado = true;

console.log("Destinos possíveis");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1);
} else {
    if(estaAcompanhado){
        console.log("Comprador está acompanhado de um maior de idade");
        listaDeDestinos.splice(1,1);

    } else {
        console.log("Você não conseguirá prosseguir com a compra por não possuir a idade mínima de 18 anos.")
    }
    
}

// abaixo deletei um registro, no caso o segundo da listagem (começa em 0). E o 1 significa que eu pedi pra exc só ele

console.log(listaDeDestinos);

