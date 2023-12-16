import { CreateUserDto } from "../dto/CreateUserDto";
import { User } from "../model/userModel";

export interface IUserRepository {
    create(userData: CreateUserDto) : Promise<User>
}