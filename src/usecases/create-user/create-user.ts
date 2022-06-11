import { UserRepository } from './ports/user-repository'
import { UserData } from './user-data'
import { User } from '../../entities'
import { UseCase } from '../ports/use-case'

export class CreateUser implements UseCase {
  private readonly userRepo: UserRepository

  constructor (userRepo: UserRepository) {
    this.userRepo = userRepo
  }

  public async perform (request: User): Promise<UserData> {
    const userId = request.userId.value
    const email = request.email.value
    const password = request.password.value
    const userData = { userId, email, password }

    if (!(await this.userRepo.exists(userData))) {
      await this.userRepo.add(userData)
    }
    return userData
  }
}
