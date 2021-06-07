import { NextFunction , Request , Response} from 'express'



export default class AuthValidation{


    static login(req:Request , res:Response , next:NextFunction){
      
       const {email , pwd} = req.body
       const emailRegex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/g

       const result = emailRegex.test(email)
       console.log(result)

       if(typeof email !== "string" || result === false) throw "Email is not a string"
    
       if(typeof pwd !== "string") throw "Password must be a string"

       if(!pwd || !email) throw "Email or password not provided"
    
       if(pwd.length < 6) throw "password is less than six"

       next()
    
    }

    static register(req:Request , res:Response , next:NextFunction){
      
        const {name , email , pwd} = req.body
        const emailRegex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/g
 
        const result = emailRegex.test(email)
        console.log(result)
 
        if(typeof email !== "string" || result === false) throw "Email is not a string"
     
        if(typeof pwd !== "string") throw "Password must be a string"
 
        if(!pwd || !email || !name) throw "Email or password not provided"
     
        if(pwd.length < 6) throw "password is less than six"
 
        next()
     
     }
}