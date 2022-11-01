import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HerbivoroValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    animal_id: schema.number([
      rules.unique({ table: 'animals', column: 'id' }),
      rules.exists({ table: 'animals', column: 'id' }),
    ]),

    altura: schema.number([rules.range(1, 100)]),

    peso: schema.number([rules.range(0, 50)]),
  })

  public messages: CustomMessages = {
    unique: '{{ field }} tem que ser único',
    exists: 'O {{ field }} é obrigatório',
    range: '{{ field }} pode ser de {{ options.range }}',
  }
}
