class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if (this.saldo >= valor){
            this.saldo -= valor;
        }
    }

}



const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = "11122233309";


const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.agencia = 1234;
ContaCorrenteRicardo.saldo = 100;

ContaCorrenteRicardo.sacar(200);
console.log(ContaCorrenteRicardo.saldo)

console.log(cliente1)