const fs = require('fs')
 const path = require('path')



 function create10Files(){


 
  for (let i = 1; i<11; i++){

  let content = Array.from([...Array(i)].keys()).join("\r\n")

  fs.writeFileSync(`file${i}.txt`,content)

  }
  

 }




 function createSingle(){

    const arr = []

    for (let i=1; i<11; i++){

    const text = fs.readFileSync(`file${i}.txt`,'utf-8')

    const lines = text.split('\r\n').splice(0,i).join('')

    arr.push(`file number ${i}\n ${lines}`)

    }

    fs.writeFileSync('all.txt',arr.join('\r\n'))

   }  



 create10Files()

 createSingle()
