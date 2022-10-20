import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'
import Herbivoro from './Herbivoro'

export default class Animal extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public clienteId: number

  @column()
  public nome: string

  @column()
  public tipo: string

  @column()
  public raca: string

  @column()
  public idade: number

  @column()
  public alergia: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Cliente)
  public cliente: HasOne<typeof Cliente>

  @hasOne(() => Herbivoro)
  public herbivero: HasOne<typeof Herbivoro>
}
