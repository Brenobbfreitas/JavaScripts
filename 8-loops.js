console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `curitiba`
);

const idade = 18;
const estaAcompanhada = false;
let temPassagemComprada = false; //variavel mutalvel
const destino = `curitiba`; //variavel constante

console.log("Locais Disponiveis: \n")
console.log(listaDeDestinos);

const podeComprar = idade >= 18 || estaAcompanhada == true; //condicional ou

let contador = 0;
let destinoExiste = false
while(contador < 4){ //repetidor
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        temPassagemComprada = true;
        console.log(`Compra realizada !! Destino Agendado: ${listaDeDestinos[contador]}`);
        break; //interrompe a operação
    }
    contador += 1;
}

console.log(`ticket:${temPassagemComprada}`); // value boolean

if(destinoExiste == true && podeComprar == true){
    console.log(`Boa viagem`)
}else{
    console.log(`desculpe temos um erro`)
}


for(let i  = 0 ; i < 3 ; i++){
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
    }
} // repetidor for