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
contaCorrenteRicardo.Cliente = cliente1;
//compondo as classes
contaCorrenteRicardo.depositar(500)

const conta2 = new ContaCorrente();
    conta2.cliente = cliente2;
    conta2.agencia = 102;


contaCorrenteRicardo.transferir(200, conta2)

console.log(conta2);
console.log(contaCorrenteRicardo);
