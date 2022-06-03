import { InMemoryUserRepository } from '../../../src/usecases/create-user/repository/in-memory-user-repository'
import { UserData } from '../../../src/usecases/create-user/user-data'

describe('In memory User repository', () => {
  test('should return null if user is not found', async () => {
    const users: UserData[] = []
    const sut = new InMemoryUserRepository(users)
    const user = await sut.findUserByUserId('userId')
    expect(user).toBeNull()
  })

  test('should return user if provided data is valid', async () => {
    const users: UserData[] = [{
      userId: 'userId',
      email: 'email',
      password: 'password'
    }]
    const userRepo = new InMemoryUserRepository(users)
    const user = await userRepo.findUserByUserId('userId')
    expect(user.userId).toEqual('userId')
  })
})
