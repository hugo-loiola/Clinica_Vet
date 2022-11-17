import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ConsultaUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    veterinario_id: schema.number.nullableAndOptional([
      rules.exists({ table: 'veterinarios', column: 'id' }),
    ]),

    animal_id: schema.number.nullableAndOptional([
      rules.exists({ table: 'animals', column: 'id' }),
    ]),

    data_consulta: schema.date.nullableAndOptional({ format: 'yyyy-MM-dd' }),

    hora_consulta: schema.date.nullableAndOptional({ format: 'yyyy-MM-dd HH:mm:ss' }),

    valor: schema.number.nullableAndOptional([rules.range(1, 5000)]),

    diagnostico: schema.string.nullableAndOptional([
      rules.alpha({ allow: ['space', 'dash', 'underscore'] }),
    ]),
  })

  public messages: CustomMessages = {
    'unique': '{{ field }} tem que ser único',
    'exists': 'O {{ field }} é não existe',
    'date.format': '{{ field }} tem que ser formatado como {{ options.format }}',
    'range': '{{ field }} pode ser de {{ options.range }}',
  }
}
