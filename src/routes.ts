import { Router } from "express";
import { CreateUserControler } from "./controllers/CreateUserController";

const router = Router();
const createUserControler = new CreateUserControler
router.post("/users",createUserControler.handle);
export { router };
