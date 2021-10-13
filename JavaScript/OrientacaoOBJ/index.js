//declarando uma classe, meu molde
class Cliente{
    nome;
    cpf;
    //rg;
};

class ContaCorrente{
    agencia;
    // #saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

// metodo
    sacar(valor){
        if(this._saldo >= valor ){
            this._saldo -= valor;
        }
    }
// deposito
    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
            console.log(this._saldo);
        }
    }

}

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
contaCorrenteRicardo.sacar(50);



console.log(contaCorrenteRicardo);

