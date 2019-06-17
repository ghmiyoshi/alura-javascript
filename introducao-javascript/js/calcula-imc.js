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
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc // Defini a quantidade de casas decimais após a virgula
    } else {
        tdImc.textContent = "Impossível calcular!";
    }

    console.log(imc);

}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso_paciente / (altura_paciente * altura_paciente);

    return imc.toFixed(2);
}






