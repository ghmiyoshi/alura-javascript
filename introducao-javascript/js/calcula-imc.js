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

    var peso_valido = validaPeso(peso_paciente);
    var altura_valida = validaAltura(altura_paciente);

    
    if(!peso_valido){
        console.log("Peso inválido!"); // Mensagem no console
        peso_valido = false;
        tdPeso.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido"); // Adiciona classe de estilização definida no CSS 
    }

    if(!altura_valida){
        console.log("Altura inválida!");
        altura_valida = false;
        altura_paciente.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(peso_valido && altura_valida){
        var imc = calculaImc(peso_paciente, altura_paciente);
        tdImc.textContent = imc // Defini a quantidade de casas decimais após a virgula
    } else {
        tdImc.textContent = "Impossível calcular!";
    }

    console.log(imc);

}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    } else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    } else{
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}







