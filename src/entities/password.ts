import { Either, left, right } from '@/shared'
import { InvalidPasswordError } from '@/entities/errors'

export class Password {
  public readonly value: string

  private constructor (password: string) {
    this.value = password
  }

  public static create (password: string): Either<InvalidPasswordError, Password> {
    if (Password.validate(password)) {
      return right(new Password(password))
    }

    return left(new InvalidPasswordError(password))
  }

  static validate (password: string): boolean {
    if (!password) {
      return false
    }

    return true
  }
}
