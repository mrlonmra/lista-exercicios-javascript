/* Elabore um algoritmo que calcule o que deve ser pago 
por um produto, considerando o preço normal de etiqueta e 
a escolha da condição de pagamento. Utilize os códigos 
da tabela a seguir para ler qual a condição de pagamento 
escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const tecladoEntrada = require("prompt-sync")();
const valorProduto = parseFloat(tecladoEntrada("Digite o valor do produto em R$ (Ex: 245,89): "));
const formaPagamento = tecladoEntrada("Qual será a forma de pagamento? Debito, Dinheiro ou PIX, Parcelado. : ");
/*calculos*/
const descontoDebito = (10/100)*valorProduto;
const debito = valorProduto-descontoDebito;
const descontoDinheiro = (15/100)*valorProduto;
const dinheiro = valorProduto-descontoDinheiro;
const acrescimoParcelado2x = (10/100)*valorProduto;
const parcelado2x = valorProduto+acrescimoParcelado2x;
const parcelado = valorProduto/2;
/**/
if (formaPagamento === 'Parcelado'){
    console.log("Você será taxado em 10% de juros caso escolha parcela acima de 2x.")
    const parcelas = tecladoEntrada("Em quantas parcelas você deseja pagar? : ");
    if (parcelas > 2){
    console.log("Você escolheu pagar em",parcelas,"vezes e sofreu um juros de R$",acrescimoParcelado2x,"o valor total a se pagar é de R$",parcelado2x,". Totalizando R$",parcelado2x/parcelas,"por mês.")
    }
    else {
        console.log("Você escolheu pagar parcelado em 2x ficando o valor a ser pago de R$",parcelado,"por mês.")
    };
}
else if (formaPagamento === 'Debito'){
    console.log("Você escolheu a forma de pagamento em débito e recebeu um desconto de R$",descontoDebito,"o valor total a pagar é de R$",debito,".")
}
else if (formaPagamento === 'PIX'){
    console.log("Você escolheu a forma de pagamento em PIX e recebeu um desconto de R$",descontoDinheiro,"o valor total a pagar é de R$",dinheiro,".")
}
else if (formaPagamento === 'Dinheiro'){
    console.log("Você escolheu a forma de pagamento em Dinheiro e recebeu um desconto de R$",descontoDinheiro," o valor total a pagar é de R$",dinheiro,".")
};
