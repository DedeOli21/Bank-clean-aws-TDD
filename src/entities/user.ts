import { UserData } from '../usecases/create-user/user-data'
import { Email, Password, UserId } from '../entities'
import { Either, left, right } from '../shared/either'
import { InvalidUserIdError } from './errors/invalid-user-id-error'
import { InvalidEmailError } from './errors'

export class User {
  public readonly userId: UserId
  public readonly email: Email
  public readonly password: Password

  private constructor (userId: UserId, email: Email, password: Password) {
    this.userId = userId
    this.email = email
    this.password = password
  }

  public static create (userData: UserData): Either<InvalidUserIdError | InvalidEmailError, User> {
    const userIdOrError = UserId.create(userData.userId)
    if (userIdOrError.isLeft()) {
      return left(userIdOrError.value)
    }
    const EmailOrError = Email.create(userData.email)
    if (EmailOrError.isLeft()) {
      return left(EmailOrError.value)
    }
    const HashOrError = Password.create(userData.password)

    const userId: UserId = userIdOrError.value as UserId
    const email: Email = EmailOrError.value as Email
    const password: Password = HashOrError.value as Password

    return right(new User(userId, email, password))
  }
}
