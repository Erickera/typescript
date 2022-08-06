const person = {
  nome: "Mariana",
  idade: 28,
  profissão: "desenvolvedora",
};
person.idade = 22;

const andre: { nome: string; idade: number; profissao: string } = {
  nome: "André",
  idade: 25,
  profissao: "pintor",
};

const paula: { nome: string; idade: number; profissao: string } = {
  nome: "André",
  idade: 25,
  profissao: "Desenvolvedora",
};

enum Profissao {
  Professora,
  Atriz,
  Desenvolvedora,
  JogadoraDeFutebol,
}

interface Pessoa {
  nome: string;
  idade: number;
  profissao?: Profissao;
}

interface Estudante extends Pessoa {
  materias: string[];
}

const vanessa: Pessoa = {
  nome: "Vanessa",
  idade: 23,
  profissao: Profissao.Desenvolvedora,
};

const maria: Pessoa = {
  nome: "Maria",
  idade: 23,
  profissao: Profissao.Desenvolvedora,
};

const jessica: Estudante = {
  nome: "Jéssica",
  idade: 26,
  profissao: Profissao.Professora,
  materias: ["Matemática", "Português", "Programação"],
};

const monica: Estudante = {
  nome: "Mônica",
  idade: 26,
  materias: ["Matemática", "Português", "Programação"],
};

function listar(lista: string[]) {
  for (const item of lista) {
    console.log("- ", item);
  }
}

listar(monica.materias);
