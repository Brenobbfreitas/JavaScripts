import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    agencia;
    // #saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;
    _cliente;



    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor (agencia,cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }


// metodo
    sacar(valor ){
        if(this._saldo >= valor ){
            this._saldo -= valor;
            return valor;
            //o metodo a partir de agora quando chamado retorna o valor do saldo
        }
    }
// deposito
    depositar(valor){
        //early return
        if(valor <= 0)
        {
            return;
        }
        this._saldo += valor;
            console.log(this._saldo);
    }

    //recebendo um objeto como parametro
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    }

}
