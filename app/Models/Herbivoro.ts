import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Animal from './Animal'

export default class Herbivoro extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public animalId: number

  @column()
  public altura: number

  @column()
  public peso: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Animal)
  public animal: HasOne<typeof Animal>
}
