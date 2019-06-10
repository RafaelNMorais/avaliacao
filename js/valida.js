const cbIa = $('.cb-ia');
const cbBigData = $('.cb-big-data');
const cbMachine = $('.cb-machine');
const cbOutro = $('.cb-outro');

function validaCb() {
    if (cbIa.checked || cbBigData.checked || cbMachine.checked || cbOutro.checked) {
        return true;
    } else {
        return false;
    }
}

function name(params) {

}

function enviaFormulario() {
    document.getElementById("dados").submit();
}

function sucesso() {
    var mensagem = "Inscrição enviada. Aguarde novos detalhes em seu e-mail ";
    var email = document.getElementById('email').value;
    document.getElementById('sucesso').innerHTML = mensagem + email;
    return true;
}