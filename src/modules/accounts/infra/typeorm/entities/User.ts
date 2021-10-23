import { v4 as uuid } from 'uuid'
import {Column, Entity, PrimaryColumn} from 'typeorm'

@Entity("users")
class User{

    @PrimaryColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    nome_completo: string;

    @Column()
    endereco: string;

    @Column()
    idade: number;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}


export{User}