import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";


@injectable()
class ActionUseCase{

    constructor(
        @inject("UsersRepository")
        private usersRepository:IUsersRepository
    ){}

    async execute(user_id:string){

        const user = await this.usersRepository.findById(user_id)

        if(!user){
            throw new AppError("User not exists in database")
        }

        return  user.nome_completo+" acessou a rota para usuários autenticados."

    }
}


export {ActionUseCase}