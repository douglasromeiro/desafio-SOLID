import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAdmin = this.usersRepository.findById(user_id);

    // if (!userAdmin.admin || !userAdmin) {
    //   throw new Error(
    //     "O usuário não é um administrador, portanto não se pode listar todos usuários!"
    //   );
    // }
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
