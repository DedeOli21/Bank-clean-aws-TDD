export class InvalidUserIdError extends Error {
  public readonly userId = 'InvalidUserIdError'
  constructor (userId: string) {
    super('Invalid nuserIdame: ' + userId + '.')
  }
}
