import { UserRepository } from "../repository/UserRepository"
import { UserService } from '../service/UserService'
import { UserController } from '../controller/UserController'
import { UserModel } from "../model/userModel"


class UserFactory {
    static getInstance() {
        const repository = new UserRepository(UserModel)
        const service = new UserService(repository)
        const controller = new UserController(service)
        return controller
    }
}

export const userModule = UserFactory.getInstance()