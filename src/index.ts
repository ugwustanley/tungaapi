import express, {Request , Response} from 'express'
import LoginValidation from './validation/auth'
import route from './routes/auth'

const bodyParser = require("body-parser")



const app = express()

app.use(bodyParser.json())



app.get("/" ,(req:Request,res:Response, next:any) =>{

    res.send("you are on the homepage")

   
})
app.use(route)

const PORT:number = 3001

app.listen(PORT , () =>{
    console.log(" code is running at port" + PORT)
})