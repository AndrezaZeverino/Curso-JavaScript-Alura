console.log("Trabalhando com listas");

const listaDeDestinos = new Array (
    `Salvador`,
    `SP`,
    `RJ`,
    `SC`,
    `RO`,
    `CE`, 
    `MA`,
    `AP`, 
    `BA`
);

// abaixo eu incluí mais um destino 
listaDeDestinos.push("Curitiba");
console.log(listaDeDestinos);

// abaixo deletei um registro, no caso o segundo da listagem (começa em 0). E o 1 significa que eu pedi pra exc só ele
listaDeDestinos.splice(1,1);

console.log(listaDeDestinos);

// Se quiser listar apenas um dos destinos, coloco o número dentro de colchetes 
console.log(listaDeDestinos[1]);

// abaixo eu incluí mais um destino 
listaDeDestinos.push("Itajaí");
console.log(listaDeDestinos);

// abaixo consigo colocar no console o total de locais cadastrados 
console.log(listaDeDestinos.length);

// listando o último elemento da lista 
let ultimo = listaDeDestinos[listaDeDestinos.length - 1];
console.log(ultimo);

// colocando deste modo ele exclui os demais registros, considera que o tamanho do array será 3
listaDeDestinos.length = 3;
console.log(listaDeDestinos);
