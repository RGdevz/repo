import express from 'express'
import {getDB} from "./database";
import bcrypt from 'bcrypt'
export const router = express.Router()






router.get('/',async(req,res)=>{

	try {
		const users =await getDB().selectFrom('users').selectAll().execute()

		res.json(users)

	}catch (e) {
		res.status(500).send(e)
	}

}
)



router.post('/',async(req,res)=>{

	try {

		const {username,password,email} = req.body

		const users =await getDB().insertInto('users').values({
			name:username,
			password:bcrypt.hashSync(password,10),
			email:email}
		).executeTakeFirst()

		res.json({message:'user added',id:Number(users.insertId)})

	}catch (e) {
		res.status(500).send(String(e))
	}

}
)



router.put('/:id',async(req,res)=>{

	try {

		const {username,password,email} = req.body
		const {id} = req.params

		if (isNaN(Number(id))) throw new Error('invalid id')

		await getDB()
		.updateTable('users')
		.set({name:username,password:bcrypt.hashSync(password,10),email:email})
		.where('users.id','=',Number(id))
		.execute()

		res.json({message:`user with id ${id} updated`})

	}catch (e) {
		res.status(500).send(String(e))
	}

}
)




router.post('/login',async(req,res)=>{

	try{

		const {password,email} = req.body

 const user =		await getDB().selectFrom('users').where('users.email','=',email).selectAll().executeTakeFirstOrThrow()

		const hash = bcrypt.compareSync(password,user.password)

		if (!hash) throw new Error('bad password')

  res.json({message:`welcome ${user.name}`})


	}catch (e) {
		res.status(500).send(String(e))
	}

}
)




router.delete('/:id',async(req,res)=>{

	try {

		const {id} = req.params

		if (isNaN(Number(id))) throw new Error('invalid id')

		await getDB().deleteFrom('users').where('users.id','=',Number(id)).execute()


		res.json({message:`user with id ${id} deleted`})

	}catch (e) {
		res.status(500).send(String(e))
	}

}
)
