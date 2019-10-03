let n1 =1;
let resul;

do{
    if(n1%2 != 0){
        console.log(n1);
        resul = n1++;
        continue;
    }else{
        resul = n1++;
    }
    
} while(n1<=100);


