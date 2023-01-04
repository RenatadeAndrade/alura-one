const inputTexto = document.querySelector(".input-mensagem");
const mensagem = document.querySelector(".mensagem");

function btnCodificar(){
    const textoCodificado = codificar(inputTexto.value);
    mensagem.value = textoCodificado;
}

function codificar(stringCodificada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"]];

    stringCodificada = stringCodificada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringCodificada.includes(matrizCodigo[i][0])){
            stringCodificada = stringCodificada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringCodificada;
}

function btnDescodificar(){
    const textoDescodificado = descodificar(inputTexto.value);
    mensagem.value = textoDescodificado;
}

function descodificar(stringDescodificada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"]];

    stringDescodificada = stringDescodificada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDescodificada.includes(matrizCodigo[i][1])){
            stringDescodificada = stringDescodificada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDescodificada;
}