import bcrypt from "bcrypt";
// eslint-disable-next-line import/no-unresolved
import UserRepository from "../repositories/user.repository";

export const getUser = async (userRepository: UserRepository, userData: any) =>
  null;

export const createUser = async (
  userRepository: UserRepository,
  userData: any
) => {
  const { password } = userData;
  const salt = bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);
  userData.password = passwordHash;

  return userRepository.save(userData);
};
