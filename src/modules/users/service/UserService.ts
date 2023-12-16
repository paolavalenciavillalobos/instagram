import { CreateUserDto } from "../dto/CreateUserDto";
import { User } from "../model/userModel";
import { IUserRepository } from "../repository/UserRepositoryInterface";
import {userConfig} from '../utils/userConfig'
import bcrypt from 'bcrypt'
import { IUserService } from "./UserServiceInterface";

export class UserService implements IUserService{
    constructor(private repository: IUserRepository){}

    async create(userData: CreateUserDto): Promise<User> {
        userData.password = await this.hashPassword(userData.password)
        const user = await this.repository.create(userData)
        if(!user){
            throw new Error('cannot create user')
        }
        return user
    }

    private async hashPassword(password: string): Promise <string> {
        const loops = userConfig.hashLoops
        const hashedPassword = bcrypt.hashSync(password, loops)
        return hashedPassword 

    }

}