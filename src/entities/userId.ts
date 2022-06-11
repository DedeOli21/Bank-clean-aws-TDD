import { left, right, Either } from '../shared/either'
import { InvalidUserIdError } from './errors/invalid-user-id-error'

export class UserId {
  public readonly value: string

  private constructor (userId: string) {
    this.value = userId
  }

  public static create (userId: string): Either<InvalidUserIdError, UserId> {
    if (!UserId.validate(userId)) return left(new InvalidUserIdError(userId))

    return right(new UserId(userId))
  }

  public static validate (userId: string): boolean {
    if (!userId) return false
    if (userId.trim().length < 2 || userId.trim().length > 256) return false

    return true
  }
}
