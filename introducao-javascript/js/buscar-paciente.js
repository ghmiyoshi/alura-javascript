var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load", function(){ //Escutador de evento
        var erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            console.log(xhr.responseText);

            var resposta = xhr.responseText;
            console.log(typeof resposta);
    
            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        } else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }

    });

    xhr.send();

});