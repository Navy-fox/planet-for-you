import { LogTypeUser } from '@/types/LogTypeUser'

export type IUserLog = {
  time: Date
  work: LogTypeUser
  userId: number
  message: string
}
