/*Calcule e imprima a soma das idades de um
grupo composto por x pessoas */

let grupoPessoas = prompt("Quantas pessoas  fazem parte do grupo ? ")

let idade = 0

for (let i = 0; i < grupoPessoas; i++){
    let idadeIntegrante = prompt("Digite a sua idade: ")
    idade = idade + idadeIntegrante
    document.write(idade)

    media = idade / grupoPessoas
    document.write(media)
}

