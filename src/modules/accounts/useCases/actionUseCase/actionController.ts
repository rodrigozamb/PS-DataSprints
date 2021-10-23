import {Request,Response} from 'express'
import {ActionUseCase} from './actionUseCase'
import {container} from 'tsyringe'


class ActionController{


    async handle(req:Request,res:Response){

        const actionUseCase = container.resolve(ActionUseCase);
        const userMsg = await actionUseCase.execute(req.user.id)

        return res.json({message:userMsg})
    }
}


export {ActionController}