import { inject, injectable } from "tsyringe";
import { hash } from 'bcrypt'
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { AppError } from "@shared/errors/AppError";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

@injectable()
class CreateUserUseCase{

    constructor(
        @inject("UsersRepository")
        private usersRepository:IUsersRepository
    ){}

    async execute({username,endereco,nome_completo,idade,password,email}:ICreateUserDTO):Promise<void>{

        const userAlreadyExists = await this.usersRepository.findByEmail(email);
        if(userAlreadyExists){
            throw new AppError("Email already been used..")
        }

        const missingParams = []
        if(!username || username.length == 0){
            missingParams.push("Username")
        }
        if(!nome_completo || nome_completo.length == 0){
            missingParams.push("Nome Completo")
        }
        if(!password || password.length == 0){
            missingParams.push("Senha")
        }
        if(!endereco || endereco.length == 0){
            missingParams.push("Endereco")
        }
        if(!idade || idade == 0){
            missingParams.push("Idade")
        }
        if(!email || email.length == 0 || !email.includes('@')){
            missingParams.push("Email")
        }

        if(missingParams.length != 0){
            throw new AppError("Missing or invalid params : "+missingParams.join(','))
        }

        const hashPassword = await hash(password,8);

        await this.usersRepository.create({
            username,
            endereco,
            nome_completo,
            password:hashPassword,
            email,
            idade
        })
    }


}


export{CreateUserUseCase} 