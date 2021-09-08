			//As funções devem estar dentro da tag script, para ser interpretada pelo navegador
			//A função querySelector é utilizada para pegar os valores da tag e posteriormente manipula
            //O documente é por onde acessamos a DOM que contem o HTML da pagina
			var titulo = document.querySelector(".titulo")
			titulo.textContent = "Aparecida Nutricionista";

            var paciente  = document.querySelector("#primeiro-paciente");

            var tdPeso = paciente.querySelector(".info-peso");
            var peso = tdPeso.textContent

            var tdAltura = paciente.querySelector(".info-altura");
            var  altura = tdAltura.textContent //textContent busca o valor text


            var tdImc = paciente.querySelector(".info-imc");

            var imc =  peso / (altura * altura);

            //altera a dom(html da pagina)
            tdImc.textContent = imc
            //IMC VARIAVEL
