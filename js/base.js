const nome = "Tiago";
let nome2 = "";
let pessoaDefault = {
    nome: "Tiago",
    idade: "20",
    trabalho: "" 
}

let nomes = ["Tiago","Um","Dois"]
let pessoas = [
    {
        nome: "Tiago",
        idade: "20",
        trabalho: ""  
    },
    {
        nome: "Um",
        idade: "1",
        trabalho: "Não"
    },
    {
        nome: "Dois",
        idade: "2",
        trabalho: "Sim"
    }
]

function alterarnome() {
    nome2 = "Três"
    console.log("Valor alterado:")
    console.log(nome2)
}

function recebeEalteranome (novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:")
    console.log(nome2)
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);  
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa)
}

function imprimirPessoas() {
    console.log("---IMPRIMIR PESSOAS---");
    pessoas.forEach((item) => {
        console.log("Nome");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
        
        console.log("Trabalho:");
        console.log(item.trabalho); 
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Quatro",
    idade: "4",
    trabalho: "Não"
});

imprimirPessoas();