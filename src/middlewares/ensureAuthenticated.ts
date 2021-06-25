import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Recebendo o token
  const authToken = request.headers.authorization;

  // Validar se o token veio no authorization
  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    // Validar token
    const { sub } = verify(
      token,
      //minha chave secreta = a de AuthenticateUserService!!!!
      // usar variáveis de ambiente 
      "ec79e8e799ec4ee1a88f8286011f4a13"
    ) as IPayload;

    /**  Recuperar informações do usuário
    * para adicionar a variável user_id em request
    * tem que sobrescrever o tipo em "./src/@types"
    * e adicionar a rota em tsconfig  "typeRoots": ["./src/@types"],
    * */
    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}