function carregar(){
    var mensagem = window.document.getElementById('msg');
    var imagem = window.document.getElementById("imagem")
    var data = new Date();
    var hora = data.getHours();
    var hora = 10; // hora adicionada para teste

    if (hora < 12){
        mensagem.innerHTML = `Agora são ${hora} horas. Bom dia`
        imagem.src = "imagens/manha.jpg"
        document.body.style.background = "#123321";
    }
    else if (hora < 18){
        mensagem.innerHTML = `Agora são ${hora} horas. Boa tarde`
        imagem.src = "imagens/tarde.jpg"
        document.body.style.background = "orangered";
    }
    else{
        mensagem.innerHTML = `Agora são ${hora} horas. Boa noite`
        imagem.srt = "imagens/noite.jpg"
        document.body.style.background = "#123456";
    }
}
