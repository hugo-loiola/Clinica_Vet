import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Animal from './Animal'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public endereco: string

  @column()
  public telefone: string

  @column()
  public cpf: string

  @column()
  public cep: string

  @column()
  public logadouro: string

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

  @hasMany(() => Animal)
  public animais: HasMany<typeof Animal>
}
