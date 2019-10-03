let n1 = 0;
let n2 = 0;
let resul;
let resul1;

do{
    if(n1%3 == 0 && n2%5 == 0){
        console.log(n1+n2);
        resul = n1++;
        resul2 = n2++;
        continue;
    }else{
        resul = n1++;
        resul2 = n2++;
    }
    
} while(n1+n2<=1000);
