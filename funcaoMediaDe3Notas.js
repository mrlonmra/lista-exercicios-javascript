/*1) Faça um algorítimo que dado as 3 notas tiradas por um aluno 
em um semestre da faculdade calcule e imprima a sua média e a sua 
classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

const teclado = require("prompt-sync")();
let prova1 = parseInt(teclado("Digite o valor da primeira nota: "));
let prova2 = parseInt(teclado("Digite o valor da segunda nota: "));
let prova3 = parseInt(teclado("Digite o valor da terceira nota: "));
const semestres = 3;
const somanotas  = prova1 + prova2 + prova3;
const resultado = somanotas/semestres;
if (resultado < 5) {
    console.log("Sua nota final é de:",resultado.toFixed(1), "e você está REPROVADO!")
}
else if (resultado >= 5 && resultado <= 7) {
    console.log("Sua nota final é de:",resultado.toFixed(1), "e você está de RECUPERAÇÃO!")
  }
else {
    console.log("Sua nota final é de:",resultado.toFixed(1), " meus PARABÉNS VOCÊ PASSOU DIRETO!")
};
