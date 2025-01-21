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
  
  q3()