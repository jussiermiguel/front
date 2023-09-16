function consultar(){
    var velInput = document.querySelector('input#vel');
    var res = document.querySelector('div#res')
    var vel = Number(velInput.value);
    if (vel > 60){
        res.innerHTML = `Velocidade registrada: <strong>${vel}Km/h</strong> - Multado`;
    }
    else{
        res.innerHTML = `Velocidade registrada: <strong>${vel}Km/h</strong> - Sem Multa`;
    }
}

function cadastro(){
    var idadeText = document.querySelector('input#idade').value;
    var nascionalidadeText = document.querySelector('input#nascionalidade').value;
    var nascionalidade = nascionalidadeText.trim().charAt(0).toUpperCase()  + nascionalidadeText.slice(1);
    var idade = Number(idadeText);
    var retorno1 = document.getElementById('retorno1');
    var retorno2 = document.getElementById('retorno2');
    
    if (idade >= 18){
        retorno1.innerHTML = `Você tem ${idade} anos. Assim você já é de maior!`;
    }

    else if (idade < 18 && idade > 0){
        retorno1.innerHTML = `Você tem ${idade} anos. Você é muito jovem!`;
    }
    else{
        retorno1.innerHTML = `${idade} não é um valor válido!`;
    }


    if (nascionalidade != 'Brasil'){
        retorno2.innerHTML = ` Mais um nascido no ${nascionalidade}. Seja bem vindo!`;
    }
    else{
        retorno2.innerHTML = ` Você nasceu em ${nascionalidade}. Seja bem vindo ao Brasil!`;
    }
}