import AbstractEntity from '@/entities/AbstractEntity'
import User from '@/entities/User'
import { format } from 'timeago.js'

export default class PublicationObject extends AbstractEntity {
  id: number
  user: User
  content: string
  image: string
  createdAt: Date

  constructor (data: any) {
    super()

    this.id = data.id
    this.user = data.user
    this.content = data.content
    this.image = data.image
    this.createdAt = data.createdAt
  }

  getTimeago () {
    return format(this.createdAt, 'fr')
  }
}
