import { CreateUserDto } from "../dto/CreateUserDto";
import { User } from "../model/userModel";

export interface IUserService {
    create(userData: CreateUserDto): Promise <User>
}