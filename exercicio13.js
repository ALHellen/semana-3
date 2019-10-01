let num1 = 4;
let num2 = 2;
let operacao = 'mais';


if(operacao == 'mais'){
let resultado = 4 + 2;
console.log('O resultado da soma é: ' + resultado);
}
else if(operacao == 'menos'){
let resultado = 4 - 2;
console.log('O resultado da subtração é: ' + resultado);
}
else if(operacao == 'multiplicação'){
let resultado = 4 * 2;
console.log('O resultado da multiplicação é: ' + resultado);
}
else if(operacao == 'divisão'){
let resultado = 4 / 2;
console.log('O resultado da divisão é: ' + resultado);
}
else{
    console.log('Desculpe, essa operação não está disponível no momento.')
}