import AbstractEntity from '@/entities/AbstractEntity'

export default class User extends AbstractEntity {
  public id: number | undefined
  public email: string | undefined
  public nickname: string | undefined
}
