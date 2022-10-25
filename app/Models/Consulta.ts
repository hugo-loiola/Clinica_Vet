import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Animal from './Animal'
import Veterinario from './Veterinario'

export default class Consulta extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public veterinarioId: number

  @column()
  public animalId: number

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

  @hasOne(() => Animal)
  public animal: HasOne<typeof Animal>

  @hasOne(() => Veterinario)
  public veterinario: HasOne<typeof Veterinario>
}
