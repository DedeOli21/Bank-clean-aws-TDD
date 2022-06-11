import { UserRepository } from '@/usecases/create-user/ports/user-repository'
import { InMemoryUserRepository } from '@/usecases/create-user/repository/in-memory-user-repository'
import { UserData } from '@/usecases/create-user/user-data'
import { CreateUser } from '@/usecases/create-user/create-user'
import { User } from '@/entities'

describe('Create user', () => {
  test('Should create user with valid data', async () => {
    const users: UserData[] = []
    const repo: UserRepository = new InMemoryUserRepository(users)
    const usecase: CreateUser = new CreateUser(repo)
    const userId = 'any_user_id'
    const email = 'any@email.com'
    const password = 'valid_password'
    const user = User.create({ userId, email, password }).value as User
    const response = await usecase.perform(user)
    expect(response.userId).toBe(userId)
  })

  test('Should not create user without UserId data', async () => {
    const users: UserData[] = []
    const repo: UserRepository = new InMemoryUserRepository(users)
    const usecase: CreateUser = new CreateUser(repo)
    const userId = null
    const email = 'any@email.com'
    const password = 'valid_password'
    const user = User.create({ userId, email, password }).value as User
    const response = await usecase.perform(user)
    expect(response).toBe('UserId is required')
  })
})
