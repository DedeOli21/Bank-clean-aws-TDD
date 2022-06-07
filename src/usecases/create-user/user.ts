import { UserData } from './user-data'
import { Email } from './email'
import { Password } from './password'
import { UserId } from './userId'

export class User {
  public readonly email: Email
  public readonly userId: UserId
  public readonly password: Password

  private constructor (userId: UserId, email: Email, password: Password) {
    this.userId = userId
    this.email = email
    this.password = password
  }

  public static create (userData: UserData): User {
    const UserIdOrError = UserId.create(userData.userId)
    const EmailOrError = Email.create(userData.email)
    const HashOrError = Password.create(userData.password)

    const userId: UserId = UserIdOrError as UserId
    const email: Email = EmailOrError as Email
    const password: Password = HashOrError as Password

    return new User(userId, email, password)
  }
}
