var hora = new Date().getHours();

console.log(`Agora são exatamente ${hora} horas.`);

if (hora < 12){
    console.log("Bom dia!");
}

else if(hora < 18){
    console.logo("Boa tarde!");
}

else{
    console.log("Boa noite!")
}