let frutas = ["banana" , "maça", "laranja"]

//frutas.push(prompt("Digite uma fruta!")) // adiciona o elemento 

//frutas.pop()//remove o ultimo elemento

// 1 : posição do elemento - index , 2 : quantidade de itens removidos a partir do index
//frutas.splice(1,1)// a partir da banana(0), remove a maça

frutas.push("laranja")

for (let i = 0; i < frutas.length; i ++){
    document.write(frutas[i] + "<br />")
}

