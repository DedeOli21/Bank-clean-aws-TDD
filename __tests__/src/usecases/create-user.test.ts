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
    const userId = 'user_id'
    const email = 'any@email.com'
    const password = 'valid_password'
    const response = await usecase.perform({ userId, email, password })
    const user = repo.findUserByUserId(userId)
    expect((await user).userId).toBe(userId)
    expect(response.value).toStrictEqual({ userId, email, password })
  })

  test('Should not create user without UserId data', async () => {
    const users: UserData[] = []
    const repo: UserRepository = new InMemoryUserRepository(users)
    const usecase: CreateUser = new CreateUser(repo)
    const invalidUserId = ''
    const email = 'any@email.com'
    const password = 'valid_password'
    const response = (await usecase.perform({ userId: invalidUserId, email, password })).value as Error
    const user = await repo.findUserByUserId(invalidUserId)
    expect(user).toBeNull()
    expect(response.name).toEqual('InvalidUserIdError')
  })
})
