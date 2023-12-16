import {Router}  from 'express'
import { userRoutes } from '../modules/users/routes/userRoutes'


export const routes = Router()

routes.use(userRoutes)