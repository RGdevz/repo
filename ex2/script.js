function isPrime(number){


    if (number < 2) return false
    
    for (let i=2; i <= Math.sqrt(number); i++){
    
    if (number%i == 0) return false
    
    }
    
    return true;
    
    }
    
    
    
    function q2(){
    
    
    
      [...Array(237).keys()].forEach(x=>{
    
        if (isPrime(x)){
            console.log(`${x} is prime`)
        }
    
      })
    
    
    }



    q2()