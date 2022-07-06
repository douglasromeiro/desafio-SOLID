import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("Não existe nenhum usuário com esse e-mail!");
    }

    const userAdmin = this.usersRepository.turnAdmin(user);

    return userAdmin;
  }
}

export { TurnUserAdminUseCase };
