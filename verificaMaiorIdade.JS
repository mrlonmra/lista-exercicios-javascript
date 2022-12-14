
/*FAÇA UMA FUNÇÃO QUE PERGUNTE SE VOCÊ É MAIOR DE IDADE*/
const teclado = require("prompt-sync")();
const idade = teclado("Quantos anos você tem? ")

function maiorIdade()
{
if(idade < 18){
    console.log("VOCÊ NÃO É MAIOR DE IDADE SUA IDADE É:",idade,"!");
}
else{
    console.log("VOCÊ É MAIOR DE IDADE, SUA IDADE É:",idade,"!");
};
};

function main()
{
    maiorIdade();

}

main();
