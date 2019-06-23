var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);

    var pacientes = querySelectorAll(".pacientes");
    
    for(var i = 0; pacientes.length; i++){
        var paciente = pacientes[i];

        var pacienteTdNome = paciente.querySelector(".info-nome");
        var nome = paciente.textContent;

    }

});