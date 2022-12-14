import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AnimalUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    nome: schema.string.nullableAndOptional([
      rules.alpha({ allow: ['space'] }),
      rules.maxLength(100),
    ]),

    tipo: schema.string.nullableAndOptional([
      rules.alpha({ allow: ['space'] }),
      rules.maxLength(50),
    ]),

    raca: schema.string.nullableAndOptional([
      rules.alpha({ allow: ['space'] }),
      rules.maxLength(50),
    ]),

    idade: schema.number.nullableAndOptional(),

    alergia: schema.string.nullableAndOptional([
      rules.alpha({ allow: ['space'] }),
      rules.maxLength(500),
    ]),

    cliente_id: schema.number.nullableAndOptional([
      rules.exists({
        table: 'clientes',
        column: 'id',
      }),
    ]),
  })

  public messages: CustomMessages = {
    maxLength: 'O número máximo de caractéres do campo {{ field }} é de {{ options.maxLength }}',
    range: '{{ field }} tem que ser entre {{ options.range }}',
    unique: '{{ field }} tem que ser único',
    exists: 'O {{ field }} é obrigatório',
  }
}
