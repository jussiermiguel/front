let num = [8,7,5,4];

console.log(`Nosso vetor: ${num}`);
console.log(num);
console.log(`Esse vetor tem ${num.length} posições`);
num.sort();
console.log(`Colocando em ordem crescente ${num}`);
num.push(9);
console.log(`Adicionando mais um valor: ${num}`);
console.log(`Esse é o primeiro valor: ${num[0]}`);

let pos = num.indexOf(8);
console.log("Procurando o index do valor 8")
if(pos == -1){
    console.log(`O valor 8 não foi encontrado!`)
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}