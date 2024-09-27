// SEMANA 4 - DESAFIO RESTAURANTE

//Importo a biblioteca readline-sync.
const readline = require('readline-sync');

//Insiro a variável para realizar loop diante de algum erro de resposta ou se necessário realizar nova divisão.
let continuar = true

// Inicio um "while" como estrutura de repetição/loop.
while (continuar) {

    //Crio variável para obter número de pessoas.
    const numeroPessoas = readline.questionInt('Quantas pessoas irao dividir a conta? \n');
    //Crio condição para informar alerta e recomeçar aplicação caso a resposta para número de pagantes seja <= 1.
    if (numeroPessoas <= 1) {
        console.log('Atenção! A divisão da conta só pode ser realizada para no mínimo duas pessoas. Recomece e tente novamente! \n');
        continue;
    }
    
    //Crio variável para obter valor total da conta.
    const valorTotal = readline.questionFloat('Qual valor total da conta? \n');
    //Crio variável para obter forma de paqamento. 
    const pagamento = readline.questionInt('Informe o nr. referente a forma de pagamento (1) Pix, (2) Dinheiro ou (3) Cartao. OBS: Pix ou Cartao recebem 10% de desconto: \n');

    //Crio as variáveis matemáticas para definir e dividir o valor da conta com ou sem desconto.
    const valorDividido = valorTotal / numeroPessoas;
    const desconto = valorTotal * 0.1;
    const valorTotalDesconto = valorTotal - desconto;
    let valorIndividual = valorTotalDesconto / numeroPessoas;

    //Crio condição para aplicar desconto de 10% e visualizar na tela as informações definidas.
    if (pagamento == 1 || pagamento == 2) {
        console.log('\n');
        console.log(`A conta será dividida para ${numeroPessoas} pessoas. \n`);
        console.log(`O valor total da conta foi R$ ${valorTotal.toFixed(2)}. \n`);
        console.log('Sua forma de pagamento será por Pix/Dinheiro (com desconto de 10%). \n');
        console.log(`O novo valor da conta com desconto é R$ ${valorTotalDesconto.toFixed(2)}. \n`);
        console.log(`O valor individual para pagamento será R$ ${valorIndividual.toFixed(2)}. \n`)
    //Crio condição para pagamento em cartão e visualizar na tela as informações definidas.
    } else if (pagamento == 3) {
        console.log('\n');
        console.log(`A conta será dividida para ${numeroPessoas} pessoas. \n`);
        console.log(`O valor total da conta foi R$ ${valorTotal.toFixed(2)}. \n`);
        console.log('Sua forma de pagamento será por cartão (sem desconto). \n');
        console.log(`O valor individual para pagamento será R$ ${valorDividido.toFixed(2)}.\n`)
    //Crio condição para informar alerta e recomeçar aplicação caso a resposta para forma de pagamento seja incompatível. 
    } else if (pagamento > 3 || pagamento == 0) {
        console.log('Atenção! Informe um nr de 1 a 3 referente a forma de pagamento escolhida: (1) Pix, (2) Dinheiro, (3) Cartão. Recomece e tente novamente! \n');
        continue;
    }   

    const reiniciar = readline.questionInt('Deseja realizar nova divisao de conta? Sim (1) ou Nao (2)? \n');

    if (reiniciar == 1) {
        console.log('\n');
        continue;
    } else {
        continuar = false
        console.log('\n');
        break;
    }

}

console.log('Obrigada pela preferência, volte sempre! \n');