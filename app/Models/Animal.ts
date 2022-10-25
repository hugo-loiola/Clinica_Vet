import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  HasMany,
  hasMany,
  HasOne,
  hasOne,
  ManyToMany,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'
import Herbivoro from './Herbivoro'
import Consulta from './Consulta'
import Veterinario from './Veterinario'

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

  @belongsTo(() => Cliente)
  public cliente: BelongsTo<typeof Cliente>

  @hasOne(() => Herbivoro)
  public herbivoro: HasOne<typeof Herbivoro>

  @hasMany(() => Consulta)
  public consulta: HasMany<typeof Consulta>

  @manyToMany(() => Veterinario, {
    pivotTable: 'consultas',
  })
  public veterinaio: ManyToMany<typeof Veterinario>
}
