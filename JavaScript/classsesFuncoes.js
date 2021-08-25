// Função contrutora de Objetos

const Livro = function(nome, editora, paginas){
    gNome = nome,
    gEditora = editora, 
    gPaginas = paginas


this.gNome = function(){
    return gNome; // metodos -->> comportamento dos objetos
}

this.gEditora = function(){
    return gEditora;
}

this.gPaginas = function(){
    return gPaginas;
}
}

//Classes estrutura utilizadas para criar objetos 

const graphQL = new Livro("harry o Escritor", "FolhaSIO", 130);

console.log(graphQL.gNome());
console.log(graphQL.gEditora());
console.log(graphQL.gPaginas());