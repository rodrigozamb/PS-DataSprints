
interface ICreateUserDTO{
    username: string;
    password:string;
    endereco:string;
    email:string;
    nome_completo:string;
    idade:number;
    id?:string;
}

export{ICreateUserDTO}