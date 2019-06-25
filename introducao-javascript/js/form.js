// form.js
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){ // função anônima
    event.preventDefault();

    console.log("O botão foi clicado");

    var form = document.querySelector("#form-adiciona");

    // Extrai informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);
    console.log(erros);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    // Limpa o form após adicionar um paciente 
    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

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

function validaPaciente(paciente){
    var erros = [];

    if(paciente.nome.length == 0) erros.push("O nome não pode ser em branco");

    if(paciente.altura.length == 0) erros.push("A altura não pode ser em branca");

    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");

    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if(!validaPeso(paciente.peso)) erros.push("Peso inválido");

    if(!validaAltura(paciente.altura)) erros.push("Altura inválida");

    return erros;

}

function adicionaPacienteNaTabela(paciente){
    // Cria a tr e td do paciente
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes"); //Adiciona paciente na tabela
    
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);

    });

}