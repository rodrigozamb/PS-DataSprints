import {Request,Response} from 'express'
import {AuthenticateUserUseCase} from '../authenticateUser/AuthenticateUserUseCase'
import {container} from 'tsyringe'

class AuthenticateUserController{


    async handle(req:Request,res:Response){
        const {email,password} = req.body

        const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);
        const {token} = await authenticateUserUseCase.execute({email,password})
        return res.json({token})
    }
}


export {AuthenticateUserController}