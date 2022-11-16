import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Consulta from './Consulta'
import Animal from './Animal'

export default class Veterinario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public salario: number

  @column()
  public endereco: string

  @column()
  public telefone: string

  @column()
  public cpf: string

  @column()
  public cep: string

  @column()
  public logradouro: string

  @column()
  public complemento: string

  @column()
  public numero: string

  @column()
  public bairro: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Consulta)
  public consulta: HasMany<typeof Consulta>

  @manyToMany(() => Animal, {
    pivotTable: 'consultas',
  })
  public animal: ManyToMany<typeof Animal>
}
