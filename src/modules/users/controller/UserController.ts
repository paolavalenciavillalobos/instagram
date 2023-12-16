import { Request, Response } from 'express'
import { IUserService } from '../service/UserServiceInterface';
import { userBodyValidator } from '../utils/userBodyValidator';

export class UserController{
    constructor(private service: IUserService){}

    async create(req: Request, res: Response) {
        try{
            const {body} = req
            await userBodyValidator.validate(body)
            const result = await this.service.create(body)
            res.status(201).json(result)

        }catch(e: any) {
            res.status(500).json(e)
        }
    }
}