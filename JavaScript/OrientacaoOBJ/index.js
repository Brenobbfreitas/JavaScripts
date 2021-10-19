import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Contacorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";
// importanto class cliente/ContaCorrente


//cliente 1 e cliente 2 são objetos
//new cliente eu estou criando uma instancia da minha classe
const cliente1 = new Cliente("Ricardo", 12345678977);

const contaCorrenteRicardo = new ContaCorrente(0,cliente1, 1002);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);
//compondo as classes
//contaCorrenteRicardo.depositar(500)

const contaPoupanca = new ContaPoupanca(0,cliente1, 1001);

console.log(contaCorrenteRicardo);
console.log(contaPoupanca);
