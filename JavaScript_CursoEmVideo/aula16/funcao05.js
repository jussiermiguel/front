// RECURSIVIDADE
function fatorialr(n){
    if (n == 1){
        return 1
    }
    else{
        return n * fatorialr(n-1)
    }
}

console.log(fatorialr(4))
console.log(fatorialr(5))

/*
5! = 5 x 4 x 3 x 2 x 1 = 120
5! = 5 x 4! > 5 x 24 = 120
4! = 4 x 3 x 2 x 1 = 24

n! = n x (n-1)!
1! = 1
*/