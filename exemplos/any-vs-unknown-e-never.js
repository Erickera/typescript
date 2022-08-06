"use strict";
let valor;
valor = 5;
valor = "Max";
let nome;
if (typeof valor === "string") {
    nome = valor;
}
valorAny = true;
valorAny = 10;
nome = valorAny;
function geradorDeErro(mensagem, codigoDeErro) {
    throw { message: mensagem, errorCode: codigoDeErro };
}
geradorDeErro("Um erro ocorreu!", 500);
