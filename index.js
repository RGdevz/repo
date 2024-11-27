function q1(){

  const num = 120

    Number(num % 2 == 0 && num % 3 == 0 && num % 5 == 0) == 1 ? console.log('3') : 
    Number(num % 2 == 0 || num % 3 == 0 || num % 5 == 0) == 1 ? console.log('1') : 
    Number(num % 2 == 0) ? console.log('2') :
    Number(num % 3 == 0) ? console.log('2') :
    Number(num % 5 == 0) ? console.log('2') :0
  

}




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



function q3(){

    const arr = [1,5,7,1,0,0,100,120]

    let count =0



    for (let num of arr){
    
    const str = String(num)
    const split = str.split('')
     
    count += split.filter(x=>x == 0).length

    }

    console.log(count)

}

q1()
q2()

q3()