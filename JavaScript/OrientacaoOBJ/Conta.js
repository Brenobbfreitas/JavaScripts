export class Conta{
    constructor (saldoInicial,cliente,agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }


    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this_cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

// metodo
    sacar(valor){
        
        let taxa = 1;
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado ){
            this._saldo -= valorSacado;
            return valorSacado;
            //o metodo a partir de agora quando chamado retorna o valor do saldo
        }
    }
// deposito
    depositar(valor){

        this._saldo += valor;
    }

    //recebendo um objeto como parametro
    transferir(valor, conta){

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    }

}