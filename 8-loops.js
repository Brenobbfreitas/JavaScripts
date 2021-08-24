console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `curitiba`
);

const idade = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = `curitiba`;

console.log("Locais Disponiveis: \n")
console.log(listaDeDestinos);

const podeComprar = idade >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false
while(contador < 4){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        temPassagemComprada = true;
        console.log(`Compra realizada !! Destino Agendado: ${listaDeDestinos[contador]}`);
        break;
    }
    contador += 1;
}

console.log(`ticket:${temPassagemComprada}`);

if(destinoExiste == true && podeComprar == true){
    console.log(`Boa viagem`)
}else{
    console.log(`desculpe temos um erro`)
}