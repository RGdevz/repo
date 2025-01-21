function q1(num){

    let count = 0
   
    count += num%2 == 0 
    count += num%3 == 0 
    count += num%5 == 0 
   
    console.log(count)
   
   }
   
   q1(120)