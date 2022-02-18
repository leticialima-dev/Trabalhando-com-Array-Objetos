
const n_usuario = parseFloat(prompt('Quantos usuários deseja registrar?'))

console.log(`${n_usuario} disponíveis!`)  


let usuarios = [] //numéro que ficará salvo no array

alert('Digite usuário')

for(let i = 1;i<= n_usuario; i++) {

let usuario = {

    nome: '',
    genero:'', 
    idade: 0,
    nacionalidade:'',
    passaporte: 0,

    }

    usuario.nome = prompt('insira o Nome Completo ')
    usuario.genero =prompt('Insira o Gênero')
    usuario.idade =prompt('Insira a Idade')
    usuario.nacionalidade =prompt('Insira a Nacionalidade')
    usuario.passaporte =prompt('Insira o Número do Passaporte')

    usuarios.push(usuario)
}

usuarios.forEach(function(usuarios) {
    document.writeln('Os nomes digitados são:'+ usuarios.nome + "<br />");
    document.writeln('Os generos dos usuarios são:' + usuarios.genero + "<br />");
    document.writeln('As idades digitadas foram:' + usuarios.idade + "<br />");
    document.writeln('As nacionalidades digitadas foram:' + usuarios.nacionalidade + "<br />"); 
    document.writeln('Os passaportes digitados foram:' + usuarios.passaporte + "<br />");  

});












   
