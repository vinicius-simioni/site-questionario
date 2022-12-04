const botaoEnviar = document.getElementById('btn-enviar');
const q1 = document.formquestao.q1;
const q2 = document.formquestao.q2;
const q3 = document.formquestao.q3;
const q4 = document.formquestao.q4;
const q5 = document.formquestao.q5;

//desabilita botão
botaoEnviar.disabled = true;

//adiciona evento de validação
for(let i = 0; i < q1.length; i++) {
    q1[i].addEventListener("click", validar);
}

for(let i = 0; i < q2.length; i++) {
    q2[i].addEventListener("click", validar);
}

for(let i = 0; i < q3.length; i++) {
    q3[i].addEventListener("click", validar);
}

for(let i = 0; i < q4.length; i++) {
    q4[i].addEventListener("click", validar);
}

for(let i = 0; i < q5.length; i++) {
    q5[i].addEventListener("click", validar);
}


function validar(){

    let q1valido = false;
    let q2valido = false;
    let q3valido = false;
    let q4valido = false;
    let q5valido = false;

    for(let i = 0; i < q1.length; i++) {
        if(q1[i].checked){
            q1valido = true;
            break;
        } else {
            q1valido = false;
        }
    }

    for(let i = 0; i < q2.length; i++) {
        if(q2[i].checked){
            q2valido = true;
            break;
        } else {
            q2valido = false;
        }
    }

    for(let i = 0; i < q3.length; i++) {
        if(q3[i].checked){
            q3valido = true;
            break;
        } else {
            q3valido = false;
        }
    }

    for(let i = 0; i < q4.length; i++) {
        if(q4[i].checked){
            q4valido = true;
            break;
        } else {
            q4valido = false;
        }
    }

    for(let i = 0; i < q5.length; i++) {
        if(q5[i].checked){
            q5valido = true;
            break;
        } else {
            q5valido = false;
        }
    }

    if (q1valido && q2valido && q3valido && q4valido && q5valido) {
        botaoEnviar.disabled = false;
    } else {
        botaoEnviar.disabled = true;
    }

}