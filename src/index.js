/// SEMANA 4 - DESAFIO RESTAURANTE

// Importo a biblioteca readline-sync.
const readline = require('readline-sync');

// Crio as variáveis para os cálculos da função.
let valorDividido = 0;
let desconto = 0;
let valorTotalDesconto = 0;
let valorIndividual = 0;
let comDesconto = false;

// Crio variáveis de texto para otimizar código, evitando console.log com scripts extensos.
const msgAtencaoNrPessoas = 'Atenção! A divisão da conta só pode ser realizada para no mínimo duas pessoas. Recomece e tente novamente! \n';
const msgAtencaoPagamento = 'Atenção! Informe um nr de 1 a 3 referente a forma de pagamento escolhida: (1) Pix, (2) Dinheiro, (3) Cartão. Recomece e tente novamente! \n \n';
const msgInformePagamentoDesconto = 'Sua forma de pagamento será por Pix/Dinheiro (com desconto de 10%). \n';
//Não utilizei essa -> const msgInformePagamentoCartao = 'Sua forma de pagamento será por cartão (sem desconto). \n';
const msgAgradecimento = 'Obrigada pela preferência, volte sempre! \n \n';

// Crio função com condição e cáculos matemáticos.
function calcularPagamento(numeroPessoas, valorTotal, formaPagamento) {

    if (formaPagamento == 1 || formaPagamento == 2) {
        desconto = valorTotal * 0.1;
        comDesconto = true;
    }
    valorDividido = valorTotal / numeroPessoas;
    valorTotalDesconto = valorTotal - desconto;
    valorIndividual = valorTotalDesconto / numeroPessoas;
    
}

//Insiro a variável para realizar loop diante de algum erro de resposta ou se necessário realizar nova divisão.
let continuar = true

// Inicio um "while" como estrutura de repetição/loop.
while (continuar) {

    //Crio variável para obter número de pessoas.
    const numeroPessoas = readline.questionInt('Quantas pessoas irao dividir a conta? \n');
    
    //Crio condição para informar alerta e recomeçar aplicação caso a resposta para número de pagantes seja <= 1.
    if (numeroPessoas <= 1) {
        console.log(msgAtencaoNrPessoas);
        continue;
    }
    
    //Crio variável para obter valor total da conta.
    const valorTotal = readline.questionFloat('Qual valor total da conta? \n');

    //Crio variável para obter forma de paqamento e alerta caso a resposta para forma de pagamento seja incompatível, recomeçando aplicação. 
    const pagamento = readline.questionInt('Informe o nr. referente a forma de pagamento (1) Pix, (2) Dinheiro ou (3) Cartao (Pix ou Dinheiro recebem 10% de desconto): \n');
        if (pagamento > 3 || pagamento == 0) {
            console.log(msgAtencaoPagamento);
            continue;
            }   

    //Chamo a função para calcular valor individual da conta.
    calcularPagamento(numeroPessoas, valorTotal, pagamento);

    //Printo na tela informações.
    console.log(`\n\nA conta será dividida para ${numeroPessoas} pessoas. \n`);
    console.log(`O valor total da conta é R$ ${valorTotal.toFixed(2)} \n`);

    //Condição para printar informação de desconto na tela, caso seja aplicado.
    if (comDesconto == true) {
        console.log(msgInformePagamentoDesconto);
        console.log(`O novo valor da conta com desconto é R$ ${valorTotalDesconto.toFixed(2)}. \n`);;
        }

    console.log(`O valor individual para pagamento da conta é R$ ${valorIndividual.toFixed(2)}.\n`);    

    //Crio variável e condicional para reinicar loop ou não.
    const reiniciar = readline.questionInt('\nDeseja realizar nova divisao de conta? Sim (1) ou Nao (2)? \n');

    if (reiniciar == 1) {
        comDesconto = false;
        console.log('\n');
        continue;
    } else {
        continuar = false
        console.log('\n');
        break;
    }
}

console.log(msgAgradecimento);