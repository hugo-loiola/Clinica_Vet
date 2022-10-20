import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Consulta extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public vetId: number

  @column()
  public clienteId: number

  @column()
  public dataConsulta: Date

  @column()
  public horaConsulta: Date

  @column()
  public valor: number

  @column()
  public diagnostico: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
