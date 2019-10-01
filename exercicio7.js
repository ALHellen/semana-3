
// var readline = require('readline');
// var numero;
// var numero2;

// var leitor = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// leitor.question("Digite o primeiro número?\n", function(answer) {
//     var numero = answer;
// leitor.question("Digite o segundo número?\n", function(answer) {
//     var numero2 = answer;
//     if(numero > numero2){
//         console.log(numero + ' é maior que ' + numero2);
//     }
//     else if(numero < numero2){
//         console.log(numero2 + ' é maior que ' + numero);
//     }
//     else if(numero == numero2){
//         console.log('Os números digitados são iguais');
//     }
//     else{
//         console.log('Não não digitou um número :' );
//     }
//     leitor.close();
// });

let numero = 2;
let numero2 = 4;

if(numero > numero2){
    console.log(numero + ' é maior que ' + numero2);
}
else if(numero < numero2){
    console.log(numero2 + ' é maior que ' + numero);
}
else if(numero == numero2){
    console.log('Os números digitados são iguais');
}
else{
    console.log('Não não digitou um número :' );
}





