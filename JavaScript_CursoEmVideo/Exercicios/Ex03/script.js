function contador(){
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');
    var res = document.getElementById('saida');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("[ERRO] Faltam Dados");
        res.innerHTML = "Impossivel contar";
    }
    else{
        res.innerHTML = "Contando: ";
        let inicio_ = Number(inicio.value);
        let fim_ = Number(fim.value);
        let passo_ = Number(passo.value);

        if (passo_ == 0){
            window.alert("Passo inválido! Considerando passo = 1");
            passo_ = 1;
        }

        if (inicio_ < fim_){
            for(let i = inicio_; i <= fim_; i += passo_){            
                res.innerHTML += ` ${i} \u{1F449}`;          
            }   
        }
        else{
            for(let i = inicio_; i >= fim_; i -= passo_){            
                res.innerHTML += ` ${i} \u{1F449}`;          
            } 
        }
        res.innerHTML += `\u{1f3c1}`
    }

}