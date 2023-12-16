import { Model } from "mongoose";
import { User } from "../model/userModel";
import { CreateUserDto } from "../dto/CreateUserDto";
import { IUserRepository } from "./UserRepositoryInterface";

export class UserRepository implements IUserRepository {
    constructor(private model: Model<User>) {
        
    }

    async create(userData: CreateUserDto): Promise<User> {
        const user = await this.model.create(userData)
        return user
    }
}