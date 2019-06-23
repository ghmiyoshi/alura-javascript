var tabelaPacientes = document.querySelector("table");

tabelaPacientes.addEventListener("dblclick", function(event){
    var alvoEvento = event.target; // Seleciona a td
    console.log(alvoEvento);

    var paiDoAlvo = alvoEvento.parentNode; // Seleciona a tr = paciente = remover
    console.log(paiDoAlvo);

    paiDoAlvo.classList.add("fadeOut");

    setTimeout(function(){
        paiDoAlvo.remove();
    },500);

});
