export class InvalidUserIdError extends Error {
  public readonly name = 'InvalidUserIdError'
  constructor (userId: string) {
    super('Invalid userId: ' + userId + '.')
  }
}
