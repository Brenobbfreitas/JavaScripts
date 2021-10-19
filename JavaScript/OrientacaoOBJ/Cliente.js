 //declarando uma classe, meu molde
export class Cliente{
    nome;
    _cpf;
    //rg;


get cpf(){
    return this._cpf;
}

constructor(nome,cpf){
    this.nome = nome;
    this._cpf = cpf;
}

};