import { IUserLog } from '@/types/IUserLog'
import { LogTypeUser } from '@/types/LogTypeUser'

export class UserLog implements IUserLog {
  time: Date
  userId: number
  work: LogTypeUser
  message: string

  constructor(userId: number, work: LogTypeUser, message?: string) {
    this.time = new Date()
    this.userId = userId
    this.work = work
    this.message = message || ''
  }
}
