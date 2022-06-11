import { left, right, Either } from '../shared/either'
import { InvalidUserIdError } from './errors/invalid-user-id-error'

export class UserId {
  public readonly value: string

  private constructor (userId: string) {
    this.value = userId
  }

  public static create (userId: string): Either<InvalidUserIdError, UserId> {
    if (UserId.validate(userId)) {
      return right(new UserId(userId))
    }

    return left(new InvalidUserIdError(userId))
  }

  public static validate (userId: string): boolean {
    if (!userId) return false

    if (userId.length === 0 || userId.length === undefined || userId.length) {
      return false
    }

    return true
  }
}
