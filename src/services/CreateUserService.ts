import { hash } from "bcryptjs";
import {getCustomRepository} from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin: boolean;
  password:string;
}
class CreateUserService {
  async execute({ name, email, admin = false ,password }: IUserRequest) {
    const UserRepository = getCustomRepository(UserRepositories);
    if (!email) {
      throw new Error("Email incorrect");
    }
    console.log("consultando o usuário :>>",email)
    const userAlreadyExists = await UserRepository.findOne({
      email,
    });
    if (userAlreadyExists) {
      throw new Error("User already exists");
    }
    const passwordHash = await hash(password,8);
    const user = UserRepository.create({
      name,
      email,
      admin,
      password:passwordHash
    });
    await UserRepository.save(user);
    return user;
  }
}

export { CreateUserService };
