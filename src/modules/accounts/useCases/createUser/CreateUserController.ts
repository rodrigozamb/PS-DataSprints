import { Request,Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";


class CreateUserController{


    async handle(request:Request,response:Response):Promise<Response>{
        const {username,nome_completo,password,endereco,idade,email} = request.body;
        const createUserUseCase = container.resolve(CreateUserUseCase)

        await createUserUseCase.execute({username,nome_completo,endereco,idade,password,email})

        return response.status(201).send();
    }
}




export {CreateUserController}