			//As funções devem estar dentro da tag script, para ser interpretada pelo navegador
			//A função querySelector é utilizada para pegar os valores da tag e posteriormente manipula
            //O documente é por onde acessamos a DOM que contem o HTML da pagina
			var titulo = document.querySelector(".titulo")
			titulo.textContent = "Aparecida Nutricionista";

            var pacientes  = document.querySelectorAll(".paciente");
            //acessa todos os valores com class paciente



            for(var i = 0; i < pacientes.length; i++){
                paciente = pacientes[i]

                var tdPeso = paciente.querySelector(".info-peso");
                var peso = tdPeso.textContent
    
                var tdAltura = paciente.querySelector(".info-altura");
                var  altura = tdAltura.textContent //textContent busca o valor text
    
    
                var tdImc = paciente.querySelector(".info-imc");
    
    
                var pesoEhValido = true
                var alturaEhValida = true
                //declarando variaveis 
    
    
                // add condicionais
                if(peso <= 0 || peso >= 1000){
                    console.log("peso inválido");
                    pesoEhValido = false;
                    tdImc.textContent = "Peso Inválido";
                    paciente.classList.add("paciente-invalido")
                    //paciente.style.backgroundColor = "lightcoral"; //style modifica o "css" da pagina
                }
    
                if(altura <= 0 || altura >= 3.00){
                    console.log("Altura invalida");
                    alturaEhValida = false;
                    tdImc.textContent = "Altura Inválida";
                    paciente.classList.add("paciente-invalido");//retorna todas as classes do objeto e alguns metodos -> add.()
                }
                
                //altera a dom(html da pagina)
                if(alturaEhValida && pesoEhValido ){
                    var imc =  peso / (altura * altura);
                    tdImc.textContent = imc.toFixed(2);//A função toFixed limita as casas decimais
                }
            }


