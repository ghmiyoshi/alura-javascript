// form.js
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){ // função anônima
    event.preventDefault();

    console.log("O botão foi clicado");

    var form = document.querySelector("#form-adiciona");

    // Extrai informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    // Cria a tr e td do paciente
    var pacienteTr = montaTr(paciente);

    // Adiciona o paciente na tabela        
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    // Limpa o form após adicionar um paciente
    form.reset();

});

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculaImc(form.peso.value, form.altura.value)
    }

    // Retorna o paciente
    return paciente;

}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr"); // createElement() cria um elemento no JS
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));  // appendChild() posiciona as <td>'s dentro da <tr>
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    // Retorna a tr
    return pacienteTr;
}

    function montaTd(dado, classe){
        var td = document.createElement("td");
        td.textContent = dado;
        td.classList.add(classe);

        // Retorna a td
        return td;
    }