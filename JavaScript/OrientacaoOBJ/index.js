import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Contacorrente.js";
// importanto class cliente/ContaCorrente


//cliente 1 e cliente 2 são objetos
//new cliente eu estou criando uma instancia da minha classe
const cliente1 = new Cliente("Ricardo", 12345678977);
const cliente2 = new Cliente("Ana", 88899977711);

const contaCorrenteRicardo = new ContaCorrente(102,cliente1);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);
//compondo as classes
//contaCorrenteRicardo.depositar(500)

const conta2 = new ContaCorrente(1003,cliente2);


let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2)

console.log(contaCorrenteRicardo);
console.log(conta2);