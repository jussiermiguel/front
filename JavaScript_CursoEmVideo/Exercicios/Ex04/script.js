function tabuada(){
    let numero = document.getElementById('num');
    let saida = document.getElementById('saida');    

    saida.innerHTML = ''
    if (numero.value.length == 0){
        window.alert("Informe todos os campos")
    }
    else{
        let num = Number(numero.value);
        for(let i = 0; i <= 10; i++){
            saida.innerHTML += `<br>${num} x ${i} = ${num * i}`
        }
        
    }
}