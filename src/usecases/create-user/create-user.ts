import { UserRepository } from './ports/user-repository'
import { UserData } from './user-data'
import { User } from '../../entities'
import { UseCase } from '../ports/use-case'
import { Either, left, right } from '@/shared'
import { InvalidEmailError, InvalidUserIdError } from '@/entities/errors'

export class CreateUser implements UseCase {
  private readonly userRepo: UserRepository

  constructor (userRepo: UserRepository) {
    this.userRepo = userRepo
  }

  public async perform (request: UserData): Promise<Either<InvalidUserIdError | InvalidEmailError, UserData>> {
    const userOrError: Either<InvalidUserIdError | InvalidEmailError, User> = User.create(request)

    if (userOrError.isLeft()) {
      return left(userOrError.value)
    }

    if (!(await this.userRepo.exists(request))) {
      await this.userRepo.add(request)
    }

    return right(request)
  }
}
