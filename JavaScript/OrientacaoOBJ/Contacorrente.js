export class ContaCorrente{
    agencia;
    // #saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

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

}
