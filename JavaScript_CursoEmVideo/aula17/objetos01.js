let amigo = {
    nome: "José",
    sexo: "M",
    peso: 80.5,
    engordar(p=0){
        console.log("Engordou!")
        this.peso += p
    }
}
let x = []

amigo.engordar(4)
console.log(`${amigo.nome} pesa ${amigo.peso}KG`)