function verificarIdade(){
    var anoNascimento = window.document.getElementById('ano');
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var res = document.querySelector('div#imagem');

    if (anoNascimento.value.length == 0 ||  Number(anoNascimento.value) > anoAtual){
        window.alert("[ERRO] Verifique os dados e tente novamente!");
    }
    else{
        var sexo = document.getElementsByName("sexo");
        var idade = anoAtual - Number(anoNascimento.value);
        var genero = '';
        var faixa = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (sexo[0].checked){
            genero = "Homem"
            if (idade >= 0 && idade < 5){
                faixa = 'bebê'// bebe
                img.setAttribute('src', 'imagens/bebem.jpg')
            }
            else if (idade <= 12){
                faixa = 'criança'// criança
                img.setAttribute('src', 'imagens/criancam.jpg')
            }
            else if (idade <= 17){
                faixa = 'adolescente'// adolescente
                img.setAttribute('src', 'imagens/adolescentem.jpg')
            }
            else if (idade <= 21){
                faixa = 'jovem'// jovem
                img.setAttribute('src', 'imagens/jovemm.jpg')
            }
            else if (idade <= 50){
                faixa = 'adulto'// adulto
                img.setAttribute('src', 'imagens/adultom.jpg')
            }
            else{
                faixa = 'idoso'// idoso
                img.setAttribute('src', 'imagens/idosom.jpg')
            }
        }
        else if (sexo[1].checked){
            genero = "Mulher"
            if (idade >= 0 && idade < 5){
                faixa = 'bebê'// bebe
                img.setAttribute('src', 'imagens/bebef.jpg')
            }
            else if (idade <= 12){
                faixa = 'criança'// criança
                img.setAttribute('src', 'imagens/criancaf.jpg')
            }
            else if (idade <= 17){
                faixa = 'adolescente'// adolescente
                img.setAttribute('src', 'imagens/adolescentef.jpg')
            }
            else if (idade <= 21){
                faixa = 'jovem'// jovem
                img.setAttribute('src', 'imagens/jovemf.jpg')
            }
            else if (idade <= 50){
                faixa = 'adulto'// adulto
                img.setAttribute('src', 'imagens/adultof.jpg')
            }
            else{
                faixa = 'idoso'// idoso
                img.setAttribute('src', 'imagens/idosof.jpg')
            }
        }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${faixa} ${genero} com ${idade} anos`;
    res.appendChild(img)
}
