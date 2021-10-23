import { AppError } from "@shared/errors/AppError"
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO"
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory"
import { CreateUserUseCase } from "../createUser/CreateUserUseCase"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"


let usersRepositoryInMemory:UsersRepositoryInMemory
let authenticateUserUseCase :AuthenticateUserUseCase
let createUserUseCase: CreateUserUseCase

describe("Authenticate User",()=>{

    beforeEach(()=>{
        usersRepositoryInMemory = new UsersRepositoryInMemory()
        authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory)
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory)
    })

    it("Should be able to authenticate an user",async()=>{
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

    it("Should not be able to authenticate an non existing user",async()=>{

        expect(async ()=>{
            await authenticateUserUseCase.execute({email:"fail@datasprints.com",password:"65432165"})

        }).rejects.toBeInstanceOf(AppError)

    })


    it("Should not be able to authenticate with incorrect password",async()=>{

        expect(async ()=>{
            const user:ICreateUserDTO = {
                username:"Bixeiro",
                password:"computaria",
                endereco:"sala da bateria",
                email:"bixeiro@computaria.com",
                idade:21,
                nome_completo:"Pedro Nery"
            }
    
            await createUserUseCase.execute(user)

            await authenticateUserUseCase.execute({email:user.email,password:"65432165"})

        }).rejects.toBeInstanceOf(AppError)

    })
})