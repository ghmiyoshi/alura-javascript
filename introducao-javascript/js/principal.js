var titulo = document.querySelector(".titulo");

titulo.textContent = "Gabriel";


var paciente = document.querySelector("#primeiro-paciente");

var peso = paciente.querySelector(".info-peso");
var peso_paciente = peso.textContent;

var altura = paciente.querySelector(".info-altura");
var altura_paciente = altura.textContent;

var gordura = paciente.querySelector(".info-gordura");
var gordura_paciente = gordura.textContent;

var peso_valido = true;
var altura_valida = true;

if(peso_paciente < 0 || peso_paciente > 1000){
    console.log("Peso inválido!");
    peso_valido = false;
}

if(altura_paciente < 0 || altura_paciente > 3.00){
    console.log("Altura inválida!");
    altura_valida = false;
}

if(peso_valido && altura_valida){
    var imc = peso_paciente / (altura_paciente * altura_paciente);

    var imc_html = document.querySelector(".info-imc");
    imc_html.textContent = imc; 
}

console.log(imc);
