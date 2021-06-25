import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
  
  const {user_id} = request;
  const usesRepositories = getCustomRepository(UserRepositories);
  const {admin} = await usesRepositories.findOne(user_id);
  
  if (admin) {
    return next();
  }
  return response.status(401).json({
    "error": "Unauthorized",
  })
}