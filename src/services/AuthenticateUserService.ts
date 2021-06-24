import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UserRepositories"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"


interface IAuthenticateUserService {
  email: string;
  password: string;
}
class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateUserService) {
    const userRepositories = getCustomRepository(UserRepositories);

    //verificar se o email existe
    const user = await userRepositories.findOne({
      email
    });
    if (!user) {
      throw new Error("Email/Password incorrect")
    }
    //verificar se a senha está correta
    const passwordMach = await compare(password, user.password);
    if (!passwordMach) {
      throw new Error("Email/Password incorrect")
    }
    //gerar token
    const token = sign({
      email: user.email
    },
    // MD5 hash Generator
      "ec79e8e799ec4ee1a88f8286011f4a13", {
      subject: user.id,
      expiresIn: "1d" //tempo de expiração um dia
    }
    );
    return token
  }

}

export { AuthenticateUserService }