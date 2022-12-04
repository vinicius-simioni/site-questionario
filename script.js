const botaoEnviar = document.getElementById('btn-enviar');
const q1 = document.getElementById('q1');
const q2 = document.getElementById('q2');
const q3 = document.getElementById('q3');
const q4 = document.getElementById('q4');
const q5 = document.getElementById('q5');

function validar(){

    let boolq1 = false;


    for(let i = 0; i < q1.length; i++) {
        if(q1[i].checked){
            console.log('checked')
        }
    }
}