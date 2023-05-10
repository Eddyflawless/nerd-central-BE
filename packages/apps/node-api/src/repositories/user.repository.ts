import { User } from "../models/User";
import { AbstractRepository } from "./abastract.repository";

export default class UserRepository extends AbstractRepository<User> {
  public constructor(userModel: User) {
    super(userModel);
  }
}
