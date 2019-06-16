var titulo = document.querySelector(".titulo"); // Seleciona um elemento HTML com a classe .titulo

titulo.textContent = "Alura Nutrição"; // Seta o valor para o elemento HTML selecionado

var pacientes = document.querySelectorAll(".paciente"); // Seleciona todos os elementos HTML com a classe .paciente

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso_paciente = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura_paciente = tdAltura.textContent;

    var tdGordura = paciente.querySelector(".info-gordura");
    var gordura_paciente = tdGordura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var peso_valido = true;
    var altura_valida = true;

    if(peso_paciente <= 0 || peso_paciente >= 1000){
        console.log("Peso inválido!"); // Mensagem no console
        peso_valido = false;
        tdPeso.textContent = "Peso inválido!";
        paciente.classList.add("peso-invalido"); // Adiciona classe de estilização definida no CSS 
    }

    if(altura_paciente < 0 || altura_paciente > 3.00){
        console.log("Altura inválida!");
        altura_valida = false;
        altura_paciente.textContent = "Altura inválida!";
    }

    if(peso_valido && altura_valida){
        var imc = peso_paciente / (altura_paciente * altura_paciente);
        tdImc.textContent = imc.toFixed(2); // Defini a quantidade de casas decimais após a virgula
    } else {
        tdImc.textContent = "Impossível calcular!";
    }

    console.log(imc);

}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
    botaoAdicionar.addEventListener("click", function(event){
        event.preventDefault();
        console.log("O botão foi clicado");


        var form = document.querySelector("#form-adiciona");

        var nome = form.nome.value;
        var peso = form.peso.value;
        var altura = form.altura.value;
        var gordura = form.gordura.value;

        var pacienteTr = document.createElement("tr");
        var nomeTd = document.createElement("td");
        var pesoTd = document.createElement("td");
        var alturaTd = document.createElement("td");
        var gorduraTd = document.createElement("td");

        nomeTd.textContent = nome;
        pesoTd.textContent = peso;
        alturaTd.textContent = altura;
        gorduraTd.textContent = gordura;

        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);

        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);

    });

    titulo.addEventListener("click", function(event){
        console.log("Fui clicado");
    });





