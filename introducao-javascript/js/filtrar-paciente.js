var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);

    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
    
            var pacienteTdNome = paciente.querySelector(".info-nome");
            var nome = pacienteTdNome.textContent;
            var expressao = new RegExp(this.value, "i"); // Busca de texto: expressão regular
                                                        // this.value - termo digitado no campo de busca
                                                        // i - indica a opção case insensitive:
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    }else {
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
    
            paciente.classList.remove("invisivel");
        }

    } 
});