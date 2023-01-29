const prompt = require('prompt-sync')();

idade = parseInt(prompt("Digite sua idade: "));
tempo = parseInt(prompt("Digite seu tempo de serviço: "));
salario = parseFloat(prompt("Digite seu salário: "));

// Implementar o comando de decisão para verificar se o cidadão pode, ou não, se aposentar

// Implementar os comandos de decisão aninhados para calcular o salário de aposentadoria (80% ou 60%)

// Implementar os comandos de decisão aninhados para garantir o salário de aposentadoria dentro dos limites inferior (R$ 1212,00) e superior (R$ 7087,22)

var limiteMaior = 7087.22;
var limiteMenor = 1212.00;

if (idade > 64 || tempo > 29 || idade > 59 && tempo >= 25){
  if (tempo > 20){
    aposentadoria80 = salario - (20/100 * salario);
    
    if (aposentadoria80 >= limiteMaior){
      aposentadoria80 = limiteMaior;
      
    } else if(aposentadoria80 <= limiteMenor){
      aposentadoria80 = limiteMenor;
    }
    console.log("Seu salário de aposentado será: ",parseFloat(aposentadoria80));
    
  } else if (tempo <= 20){
    aposentadoria60 = salario - (40/100 * salario);

    if (aposentadoria60 >= limiteMaior) {
      aposentadoria60 = limiteMaior;
      
    } else if(aposentadoria60 <= limiteMenor) {
      aposentadoria60 = limiteMenor;
    }
   console.log("Seu salário de aposentado será: ",parseFloat(aposentadoria60));
  }
  console.log("Você pode aposentar!");
} else {
  console.log("Você nao pode aposentar!");

