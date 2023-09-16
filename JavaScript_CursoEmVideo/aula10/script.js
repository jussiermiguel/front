var texto = window.document.getElementById('btn');
var area = window.document.querySelector('.area');


area.addEventListener('click', function(){

    if (texto.innerText == 'Vai Clicar?'){
        texto.innerText = 'Clicou';
    }
    // else if(texto == 'Ativado'){
    else{
        texto.innerText = 'Vai Clicar?';
    }
});


area.addEventListener('mouseenter', function() {
    area.style.backgroundColor = "green";
    texto.innerText = 'Vai Clicar?';

});

area.addEventListener('mouseleave', function() {
    texto.innerText = 'Venha até aqui';
    area.style.backgroundColor = ""; // Volta à cor de fundo original (branca ou outra cor definida no CSS)
});

function somar(){
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)){
        var resultado = num1 + num2


        // Exiba o resultado no botão
        var resultadoText = document.getElementById("resultadoText");
        resultadoText.value = resultado;
    }

    else{
        alert("Por favor, insira números válidos nos campos de entrada.");
    }
}