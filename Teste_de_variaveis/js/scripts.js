function exemplo (){

    var nome = "ruan";
    let idade = 55;
    const PI = 5;

    let resultado = idade + PI;
    console.log("ola :"+ nome + "! voce tem " + idade + " anos." );

    if (resultado > 50){
        let mesaguem = " o resultado maior que 50 ";
        console.log(mesaguem)

    } else {
        let mesaguem = " o resultado e menor ou igual a 50 anos ";
        console.log(mesaguem)
    }

}
exemplo ();

function criarCachorro(nome,raca) {
    const cachorro = Object.create({});

        cachorro.nome = nome;
        cachorro.raca = raca;

    return cachorro;

}

const wendy = criarCachorro( "wendy","xitus");
const mimi = criarCachorro ("mimi","gato")
console.log(wendy,mimi);




class humano {
    constructor( nome,idade){
    this.nome = nome;
    this.idade = idade;
} }

 const ruan = new humano("ruan",30);

 console.log(ruan);