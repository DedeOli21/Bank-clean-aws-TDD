import { UserData } from '../user-data'

export interface UserRepository {
  add(user: UserData): Promise<void>
  findUserByUserId(userId: string): Promise<UserData>
  findAllUsers(): Promise<UserData[]>
  exists(user: UserData): Promise<boolean>
}
