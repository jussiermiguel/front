let valores =[5,1,7,6,3,2,8,55]

console.log(valores);
console.log("Usando o for simples")
for(let pos=0; pos < valores.length; pos++){
    console.log(`Esse é a posição ${pos} e tem o valor ${valores[pos]}`);
}

console.log("Usando o for de um jeito mais atual")
for (let pos in valores){
    console.log(`Esse é a posição ${pos} e tem o valor ${valores[pos]}`);

}