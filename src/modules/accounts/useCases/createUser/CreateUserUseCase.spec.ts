import { AppError } from "@shared/errors/AppError"
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO"
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory"
import { CreateUserUseCase } from "./CreateUserUseCase" 
import { AuthenticateUserUseCase } from "../authenticateUser/AuthenticateUserUseCase"



let usersRepositoryInMemory:UsersRepositoryInMemory
let createUserUseCase: CreateUserUseCase
let authenticateUserUseCase : AuthenticateUserUseCase

describe("Create User",()=>{

    beforeEach(()=>{
        usersRepositoryInMemory = new UsersRepositoryInMemory()
        authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory)
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory)
    })

    it("Should be able to create an user",async()=>{
        const user:ICreateUserDTO = {
            username:"Bixeiro",
            password:"computaria",
            endereco:"sala da bateria",
            email:"bixeiro@computaria.com",
            idade:21,
            nome_completo:"Pedro Nery"
        }

        await createUserUseCase.execute(user)

        const authUser = await authenticateUserUseCase.execute({email:user.email,password:user.password})

        expect(authUser).toHaveProperty("token")

    })

    it("Should not be able to create an user with incorrect params",async()=>{

        expect(async ()=>{
            const user:ICreateUserDTO = {
                username:"Bixeiro",
                password:null,
                endereco:"sala da bateria",
                email:"bixeiro@computaria.com",
                idade:21,
                nome_completo:"Pedro Nery"
            }
    
            await createUserUseCase.execute(user)

        }).rejects.toBeInstanceOf(AppError)

    })

})