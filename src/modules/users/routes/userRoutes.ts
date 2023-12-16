import {Router} from 'express'
import { userModule} from '../factory/UserFactory'

export const userRoutes = Router()

userRoutes.post('/users', userModule.create.bind(userModule))