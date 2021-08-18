import AbstractEntity from '@/entities/AbstractEntity'
import User from '@/entities/User'
import { format } from 'timeago.js'

export default class CommentObject extends AbstractEntity {
  id: number
  user: User
  content: string
  createdAt: Date

  constructor (data: any) {
    super()

    this.id = data.id
    this.user = data.user
    this.content = data.content
    this.createdAt = data.createdAt
  }

  getTimeago (): string {
    return format(this.createdAt, 'fr')
  }
}
