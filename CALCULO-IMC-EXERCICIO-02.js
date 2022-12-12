/*O IMC – Indice de Massa Corporal é um critério da Organização 
Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua 
condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/

const tecladoEntrada = require("prompt-sync")();
const pesoKG = parseInt(tecladoEntrada("Digite por gentileza o seu peso em KG: "));
const alturaM = parseFloat(tecladoEntrada("Digite agora a sua altura em M (Ex: 1.85): "));
const calculoIMC = pesoKG/(alturaM*alturaM);
if (calculoIMC <= 18.5){
    console.log("O seu IMC é de:", calculoIMC.toFixed(2), "e segundo a OMS você esta ABAIXO do peso ideal.");
}
else if (calculoIMC >= 18.5 && calculoIMC <= 25){
    console.log("O seu IMC é de:", calculoIMC.toFixed(2), "e segundo a OMS você esta no seu peso ideal.");
}
else if (calculoIMC >= 25 && calculoIMC <= 30){
    console.log("O seu IMC é de:", calculoIMC.toFixed(2), "e segundo a OMS você esta ACIMA do peso ideal.");
}
else if (calculoIMC >= 30 && calculoIMC <= 40){
    console.log("O seu IMC é de:", calculoIMC.toFixed(2), "e segundo a OMS você esta OBESO.");
}
else {
    console.log("O seu IMC é de:", calculoIMC.toFixed(2), "e segundo a OMS você esta OBESO em um FATOR DE RISCO.");
};
