import { AppError } from "@shared/errors/AppError"
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO"
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory"

import { CreateUserUseCase } from "../createUser/CreateUserUseCase"
import { AuthenticateUserUseCase } from "../authenticateUser/AuthenticateUserUseCase"
import { ActionUseCase } from '../actionUseCase/actionUseCase'

let usersRepositoryInMemory:UsersRepositoryInMemory
let authenticateUserUseCase :AuthenticateUserUseCase
let createUserUseCase: CreateUserUseCase
let actionUseCase : ActionUseCase

describe("Authenticate User",()=>{

    beforeEach(()=>{
        usersRepositoryInMemory = new UsersRepositoryInMemory()
        authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory)
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory)
        actionUseCase = new ActionUseCase(usersRepositoryInMemory)
    })

    it("Should be able to access auhtenticated roud with an valid user",async()=>{
        const user:ICreateUserDTO = {
            username:"Bixeiro",
            password:"computaria",
            endereco:"sala da bateria",
            email:"bixeiro@computaria.com",
            idade:21,
            nome_completo:"Pedro Nery"
        }

        await createUserUseCase.execute(user)

        const instUser = await usersRepositoryInMemory.findByEmail(user.email) 
        
        const resp = await actionUseCase.execute(instUser.id)
        expect(resp).toEqual(instUser.nome_completo+" acessou a rota para usuários autenticados.")

    })

    it("Should not be able to authenticate an non existing user",async()=>{

        expect(async ()=>{
            const resp = await actionUseCase.execute("failId")
        }).rejects.toBeInstanceOf(AppError)

    })



})