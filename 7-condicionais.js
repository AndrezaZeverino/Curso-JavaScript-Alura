console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `SP`,
    `RJ`
);

const idadeComprador = 15;
const estaAcompanhado = true;

console.log("Destinos possíveis");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1);
// } else {
//     if (estaAcompanhado) {
//         console.log("Comprador está acompanhado de um maior de idade");
//         listaDeDestinos.splice(1, 1);

//     } else {
//         console.log("Você não conseguirá prosseguir com a compra por não possuir a idade mínima de 18 anos.")
//     }

// }

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1); // removendo item
}   else if (estaAcompanhado == true) {
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(1, 1); //removedo item
}else {
    console.log("Não é maior de idade e não posso vender");
}

if (idadeComprador >= 18 || estaAcompanhado == true) { 
    console.log("Comprador maior de idade");
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n\n")

if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");
} else{
    console.log("Você não pode embarcar");
} 

console.log(listaDeDestinos);

