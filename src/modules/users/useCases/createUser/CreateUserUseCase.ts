import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const alreadyExistsUser = this.usersRepository.findByEmail(email);

    if (alreadyExistsUser) {
      throw new Error("Já existe um usuário com esse email");
    }

    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
