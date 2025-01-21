const http = require('http')
const path = require('path')
const fs = require('fs')

/**
 * 
 * @param {string} filePath 
 */

function mime(filePath){

  if (!filePath) return ''
  
  const ext = path.extname(filePath.toLowerCase()).substring(1)

  if (ext == 'html'){
    return 'text/html';
  } else if (ext == 'js'){
    return 'text/javascript';
  } else if (ext == 'css'){
    return 'text/css';
  }

  return '';

}



const root = path.join(__dirname,'public')

const server = http.createServer((req,res)=>{

  

 try{
 let file = req.url || '/'

const stat =  fs.statSync(path.join(root,file))

if (stat.isDirectory()){
  file = 'index.html'
}

const data = fs.readFileSync(path.join(root, file), 'utf-8');


 res.writeHead(200, { 'content-type': mime(file) })

 res.end(data)


}catch(e){


  console.error(e)

 res.writeHead(404).end('')

 }



}
)


server.listen(3000,()=>{
  console.log('http://localhost:3000')
})
