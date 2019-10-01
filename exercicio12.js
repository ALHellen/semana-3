function calcularBhaskara(a,b,c){
  
    let delta = b**2 - 4*a*c;
    
    if(delta > 0){
      let x1 = (-b + Math.sqrt(delta))/2*a;
      let x2 = (-b - Math.sqrt(delta))/2*a;
    
      console.log('O valor de x1 é: ' + x1 + '. O valor de x2 é: ' + x2);
    }
    else if(delta == 0){
      console.log('Só há uma raiz.');
    }
    else{
        console.log('Não há raízes reais.')
    }
    
  }
  
  calcularBhaskara(1,5,4);
  