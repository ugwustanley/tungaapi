import { Request, Response } from "express";
import Auth from "../modules/auth";



class AuthController {




    static login(req: Request, res: Response) {

        const { email, pwd } = req.body;

        const auth = new Auth();

        const result = auth.login(email, pwd);

        res.send({ message: result });
    }

    static register(req: Request, res: Response) {

        const {name, email, pwd } = req.body;

        const auth = new Auth();

        const result = auth.register(name,email,pwd);

        res.send({ message: "Account successfully created", data:result});
    }


}


export default AuthController;