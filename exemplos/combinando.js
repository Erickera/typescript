"use strict";
function juntar(input1, input2) {
    let resultado;
    if (typeof input1 === "string" || typeof input2 === "string") {
        resultado = input1.toString() + input2.toString();
    }
    else {
        resultado = input1 + input2;
    }
    return resultado;
}
console.log(juntar("bom ", "dia"));
console.log(juntar(1, 2));
