let varios = [];
let n = 10;
let fac = 1;
let fac2 = 1;

for(let i = 0; i < n; i++){
    varios [i] = Math.floor(Math.random() * n);
    if(varios [i]%2 == 0){
        console.log('coroa');
        fac++;
    }
    else{
        console.log('cara');
        fac2++;
    }
    
}
console.log('Para ' + n + ' vezes que jogou sua moeda, foram ' + fac + ' coroas e ' + fac2 + ' caras');

