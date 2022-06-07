export class Password {
  public readonly value: string

  private constructor (password: string) {
    this.value = password
  }

  public static create (password: string): Password {
    return new Password(password)
  }
}
