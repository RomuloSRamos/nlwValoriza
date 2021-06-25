import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const complimentController = new CreateComplimentController();
const listUserSendComplimentsController =  new ListUserSendComplimentsController();
const listUserReceiveComplimentsController =  new ListUserReceiverComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post("/login",authenticateUserController.handle);

router.post("/users",createUserController.handle);
router.get("/users",ensureAuthenticated,listUsersController.handle);
router.get("/users/compliments/send"   ,ensureAuthenticated,listUserSendComplimentsController.handle);
router.get("/users/compliments/receive",ensureAuthenticated,listUserReceiveComplimentsController.handle);

//apenas autenticados
router.post("/compliments",ensureAuthenticated,complimentController.handle);
//apenas autenticados e admins
router.post("/tags",ensureAuthenticated,ensureAdmin,createTagController.handle);
//apenas autenticados
router.get("/tags", ensureAuthenticated, listTagsController.handle);

export { router };
