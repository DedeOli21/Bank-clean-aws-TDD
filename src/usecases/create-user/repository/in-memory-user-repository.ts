import { UserRepository } from '../ports/user-repository'
import { UserData } from '../user-data'

export class InMemoryUserRepository implements UserRepository {
  private repository: UserData[] = []

  constructor (repository: UserData[]) {
    this.repository = repository
  }

  async add (user: UserData): Promise<void> {
    this.repository.push(user)
  }

  async findUserByUserId (userId: string): Promise<UserData> {
    const found = this.repository.find(u => u.userId === userId)
    return found || null
  }

  async findAllUsers (): Promise<UserData[]> {
    return this.repository
  }

  async exists (user: UserData): Promise<boolean> {
    return this.repository.some(u => u.email === user.email)
  }
}
