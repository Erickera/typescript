"use strict";
const person = {
    nome: "Mariana",
    idade: 28,
    profissão: "desenvolvedora",
};
person.idade = 22;
const andre = {
    nome: "André",
    idade: 25,
    profissao: "pintor",
};
const paula = {
    nome: "André",
    idade: 25,
    profissao: "Desenvolvedora",
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: "Vanessa",
    idade: 23,
    profissao: Profissao.Desenvolvedora,
};
const maria = {
    nome: "Maria",
    idade: 23,
    profissao: Profissao.Desenvolvedora,
};
const jessica = {
    nome: "Jéssica",
    idade: 26,
    profissao: Profissao.Professora,
    materias: ["Matemática", "Português", "Programação"],
};
const monica = {
    nome: "Mônica",
    idade: 26,
    materias: ["Matemática", "Português", "Programação"],
};
function listar(lista) {
    for (const item of lista) {
        console.log("- ", item);
    }
}
listar(monica.materias);
