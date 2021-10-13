import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Contacorrente.js";
// importanto class cliente/ContaCorrente


//cliente 1 e cliente 2 são objetos
//new cliente eu estou criando uma instancia da minha classe
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = "12345678977";


const cliente2 = new Cliente();
cliente2.nome = "Ana";
cliente2.cpf = "88899977711";

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(200);


const valorSacado = contaCorrenteRicardo.sacar(50);

console.log(valorSacado);

console.log(contaCorrenteRicardo);

