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