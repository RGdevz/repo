function q1(){

    Number(num % 2 == 0 || num % 3 == 0 || num % 5 == 0) == 1 ? console.log('1') :
    Number(num % 2 == 1 && num % 3 == 1 && num% 5 == 1) == 1 ? console.log('3') :
    console.log('2')

    // const num = 15

    // let count = 0

    // count += num %2 == 0
    // count += num %3 == 0
    // count += num %5 == 0
    // console.log(count)


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

    const arr = [1,5,7,1,0,0,1]

    let count =0

    for (let num of arr){
    
     count += num ==0
    }

    console.log(count)

}

q1()
q2()
q3()