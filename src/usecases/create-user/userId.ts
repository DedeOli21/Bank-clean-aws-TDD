
export class UserId {
  public readonly value: string

  private constructor (userId: string) {
    this.value = userId
  }

  public static create (userId: string): UserId {
    return new UserId(userId)
  }
}
