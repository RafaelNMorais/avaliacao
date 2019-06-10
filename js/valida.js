const cbIa = $('#cb-ia');
const cbBigData = $('#cb-big-data');
const cbMachine = $('#cb-machine');
const cbOutro = $('#cb-outro');

const rManha = $('#r-manha');
const rTarde = $('#r-tarde');
const rNoite = $('#r-noite');
const rOutro = $('#r-outro');

var manha, tarde, noite, personalizado;
var ia, bigData, machine, outro;

rManha.on("click", () => {
    manha = document.getElementById("r-manha").checked;
    validaRadio();
});
rTarde.on("click", () => {
    tarde = document.getElementById("r-tarde").checked;
    validaRadio();
});
rNoite.on("click", () => {
    noite = document.getElementById("r-noite").checked;
    validaRadio();
});
rOutro.on("click", () => {
    personalizado = document.getElementById("r-outro").checked;
    validaRadio();
});

cbIa.on("click", () => {
    ia = document.getElementById("cb-ia").checked;
    validaCb()
});
cbBigData.on("click", () => {
    bigData = document.getElementById("cb-big-data").checked;
    validaCb()
});
cbMachine.on("click", () => {
    machine = document.getElementById("cb-machine").checked;
    validaCb()
});
cbOutro.on("click", () => {
    outro = document.getElementById("cb-outro").checked;
    validaCb()
});

function validaCb() {
    if (ia || bigData || machine || outro) {
        console.log("Pronto");
        return true;
    } else {
        console.log("Não pronto");
        return false;
    }
}

function enviaFormulario() {
    validaCb();
    validaRadio();
    document.getElementById("dados").submit();
}

function sucesso() {
    var mensagem = "Inscrição enviada. Aguarde novos detalhes em seu e-mail ";
    var email = document.getElementById('email').value;
    document.getElementById('sucesso').innerHTML = mensagem + email;
    return true;
}

function validaRadio() {
    if (manha || tarde || noite || personalizado) {
        console.log("Pronto");
        return true;
    } else {
        console.log("Não pronto");
        return false;
    }
}