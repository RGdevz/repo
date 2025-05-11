module.exports.logger = function logger(req,res,next){


    console.log('url',req.url)
  
    console.log('method',req.method)
  
    next()
  }
  
  
  module.exports.auth = function auth(req,res,next){
  
    const {user} = req.query
    if (user != 'admin'){
      res.status(403).send('Access Denied')
      return
    }
  
    next()
  
  
  }
  