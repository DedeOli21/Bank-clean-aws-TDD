import { UserRepository } from '../../../src/usecases/create-user/ports/user-repository'
import { InMemoryUserRepository } from '../../../src/usecases/create-user/repository/in-memory-user-repository'
import { UserData } from '../../../src/usecases/create-user/user-data'
import { CreateUser } from '../../../src/usecases/create-user/create-user'
import { User } from '../../../src/usecases/create-user/user'

describe('Create user', () => {
  test('Should create user with valid data', async () => {
    const users: UserData[] = []
    const repo: UserRepository = new InMemoryUserRepository(users)
    const usecase: CreateUser = new CreateUser(repo)
    const userId = 'any_user_id'
    const email = 'any@email.com'
    const password = 'valid_password'
    const user = User.create({ userId, email, password }) as User
    const response = await usecase.perform(user)
    expect(response.userId).toBe(userId)
  })
})
