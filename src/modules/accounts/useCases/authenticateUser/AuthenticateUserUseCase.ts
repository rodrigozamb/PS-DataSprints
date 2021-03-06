import { inject, injectable } from "tsyringe";
import{ compare} from 'bcrypt'
import {sign} from 'jsonwebtoken'
import { AppError } from "@shared/errors/AppError";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";


interface IRequest{
    email:string;
    password:string;
}

interface IResponse{

    token:string;
}

@injectable()
class AuthenticateUserUseCase{

    constructor(
        @inject("UsersRepository")
        private usersRepository:IUsersRepository
    ){}

    async execute({email,password}:IRequest):Promise<IResponse>{

        const user = await this.usersRepository.findByEmail(email);
        if(!user){
            throw new AppError("Email or password incorrect..")
        }

        const passwordMatch = await compare(password,user.password)
        if(!passwordMatch){
            throw new AppError("Email or password incorrect..")
        }

        const token = sign({},"1a42d48e824a29f436d528888f83248b",{
            subject:user.id,
            expiresIn:"1d"
        })

        const tokenReturn:IResponse ={
            token
        }

        return tokenReturn

    }
}


export {AuthenticateUserUseCase}