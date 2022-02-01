import { IUser } from '@/types/IUser'

export default class User implements IUser {
  readonly id: number
  avatar: string
  email: string
  first_name: string
  last_name: string

  constructor(model: IUser) {
    if (!model) {
      throw new Error('Модель не была передана!')
    }

    if (model.id <= 0) {
      throw new Error('Невалидный User ID')
    }

    this.avatar = String(model.avatar)
    this.email = String(model.email)
    this.first_name = String(model.first_name)
    this.id = model.id
    this.last_name = model.last_name
  }
}
