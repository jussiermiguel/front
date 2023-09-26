let numeros = [];
let maior = menor = soma = 0;

function analizarNum(){
    let num = parseInt(document.getElementById('num').value);
    let saida = document.querySelector('div#saida');

    saida.innerHTML = ''
    // if (num.length == 0){
    //     window.alert("Digite um número")
    //     num = ""; // Limpa o campo de entrada
    //     return;
    // }
    if(isNaN(num) || num > 10){
        window.alert('Digite um valor entre 1 e 10');
        document.getElementById('num').value = '';// limpa o campo
    }
    else{

        numeros.push(num);
        soma += num;
        
        if (num <= menor){
            menor = num;
        }
        else if (num >= maior){
            maior = num;
        }
        
        
        saida.innerHTML = `O valor ${num} foi adicionado`;
        document.getElementById('num').value = '';
    }
}
function finalizar(){
    if (numeros.length === 0){
        window.alert(`Nenhum número foi adicionado.`);
        return;
    }

    let media = soma / numeros.length;

    let saida = document.querySelector('div#saida');
    saida.innerHTML = ""; // Limpa a div de saída
    saida.innerHTML += `<br>Quantidade de números digitados: ${numeros.length}`
    saida.innerHTML += `<br>A soma entre os números: ${soma}`
    saida.innerHTML += `<br>A média dos números: ${media.toFixed(2)}`
    saida.innerHTML += `<br>Maior número digitado: ${maior}`
    saida.innerHTML += `<br>Menor número digitado: ${menor}`
    saida.innerHTML += `<br>Números digitados: ${numeros}`
}