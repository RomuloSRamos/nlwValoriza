import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UserRepositories } from "../repositories/UserRepositories";

interface IComplimentService {
  tag_id: string,
  user_sender: string,
  user_receiver: string
  message: string
}
class CreateComplimentService {
  async execute({ tag_id, user_sender, user_receiver, message }: IComplimentService) {
    const complimentRepositories = getCustomRepository(ComplimentsRepositories);
    const userRepositories = getCustomRepository(UserRepositories);
    if (user_receiver === user_sender) {
      throw new Error("Incorrect User Receiver");
    }
    const userReceiverExists = await userRepositories.findOne(user_receiver);
    if (!userReceiverExists) {
      throw new Error("User Receiver does not exists!");
    }

    const compliment = complimentRepositories.create({
      tag_id,
      user_sender,
      user_receiver,
      message
    });
    await complimentRepositories.save(compliment);
    return compliment;
  }
}

export { CreateComplimentService };
