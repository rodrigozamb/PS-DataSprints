import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { IUsersRepository } from "../IUsersRepository";


class UsersRepositoryInMemory implements IUsersRepository{

    private users:User[] = []

    async create(data: ICreateUserDTO): Promise<void> {
        const user = new User()
        const {username,email,password,endereco,idade,nome_completo} = data

        Object.assign(user,{
            username,email,password,endereco,idade,nome_completo
        })
        this.users.push(user)
    }
    async findByEmail(email: string): Promise<User> {
        const user = this.users.find(user=>user.email === email)
        return user
    }
    async findById(id: string): Promise<User> {
        const user = this.users.find(user=>user.id === id)
        return user
    }

    


}


export{UsersRepositoryInMemory}