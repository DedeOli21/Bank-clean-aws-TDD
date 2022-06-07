
export class Email {
  public readonly value: string

  private constructor (email: string) {
    this.value = email
  }

  public static create (email: string): Email {
    return new Email(email)
  }
}
