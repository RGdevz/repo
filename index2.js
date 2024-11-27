
function isprime(num){
  if(num<2){
   return false;
  } 
  
  for(let i=2; i<=Math.sqrt(num); i++){
    if(num%i == 0)  return false;

  }


  return true;
  

}


for(let i=1;i<237;i++){
 if(isprime(i)){ 
  console.log(i)
 }
}