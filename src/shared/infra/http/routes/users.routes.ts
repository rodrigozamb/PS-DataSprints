import {Router} from 'express'
import { CreateUserController } from '@modules/accounts/useCases/createUser/CreateUserController'
import { AuthenticateUserController } from '@modules/accounts/useCases/authenticateUser/AuthenticateUserController'
import { ActionController } from '@modules/accounts/useCases/actionUseCase/actionController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
const usersRoutes = Router()


const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const actionController = new ActionController()

usersRoutes.post("/signup",createUserController.handle)
usersRoutes.get("/signin",authenticateUserController.handle)
usersRoutes.get("/action",ensureAuthenticated ,actionController.handle)

export {usersRoutes}