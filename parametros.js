function dobro (x){
    alert("O dobro de " + x + " é " + (x * 2))
}

//dobro(5)



function dizerOla(nome = "mundo") {
    alert("Olá " + nome + "!")
}


//dizerOla("Paulo")
//dizerOla()

function soma(a, b) {
    alert("O resultado da soma é " + (a + b))
}


//soma(4, 8)

function criarUsuario(nome, email, senha, tipo = "admin") {
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }
    console.log(usuario)
}

function muitosParametros(nome, telefone,endereco,aniversario) {
    // ...
}

function objetoComParametro(usuario) {
    usuario.nome
    usuario.telefone
    usuario.endereco
    usuario.aniversario
}

const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    endereco: "",
    aniversario: ""
}

objetoComParametro(dadosDoUsuario)

console.log(dadosDoUsuario)
