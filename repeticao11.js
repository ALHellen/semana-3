let prod = [40,12.50,0];
let dinheiro = 100;
let troco;

for(i = 0; i != prod.length; i++){
    soma = prod[0]+prod[1]+prod[2];
    troco = dinheiro-soma;
    console.log('total: R$' + soma + ' dinheiro: R$' + dinheiro + ' R$' + troco); 
}

