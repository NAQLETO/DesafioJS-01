//Criei 5 Objetos, neles devem conter os dados de 5 pessoas que você conhece. Mínimo 5 dados por pessoa.

const pessoas={
    nome : "Pedro",
    sexo : "msculino",
    idade: 45,
    altura: 1.84,
    profisao: "mecânico",
    endereço:{
        bairro: "Laranjeiras",
        rua: "Carlos Afonso",
        numero: 704,
        cep: 80065832
    }
}
const car={
    marca: "chevrolet",
    ano: 2015,
    modelo: "onix",
    cor: "vermelho",
    combustivel: "alcool, gasolina"
}
const funcionario= {
    nome: "João Paulo",
    sobrenome: "Penteado",
    cargo: "almoxarife",
    admissao:"25/02/2020",
    salario: 3.575
}
const cliente={
    nome: "Ana Clara Bragança",
    endereço: "Av. Aguinaldo Ribas",
    numero: 5020,
    bairro: "Sertaneja",
    cidade: "Palotina",
    estado: "Paraná"
}
const produto={
    codigo: 001563,
    tipo: "refigerante",
    marca: "kcola",
    sabor: "guarana",
    validade: 12/12/22
}

console.log(pessoas.endereço)