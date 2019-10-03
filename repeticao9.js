let num = 3;

if(num !== 1){
for(var i = 2; i< num; i++){
    if(num%i === 0){
        console.log(num + 'não é primo');
    }
    else{
        console.log(num + ' é primo');
    }
  }
}