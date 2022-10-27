import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ConsultaValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    veterinario_id: schema.number([
      rules.unique({ table: 'veterinarios', column: 'id' }),
      rules.exists({ table: 'veterinarios', column: 'id' }),
    ]),

    animal_id: schema.number([
      rules.unique({ table: 'animals', column: 'id' }),
      rules.exists({ table: 'animals', column: 'id' }),
    ]),

    data_consulta: schema.date({ format: 'yyyy-MM-dd' }),

    hora_consulta: schema.date({ format: ' HH:mm:ss' }),

    valor: schema.number([rules.range(1, 5000)]),

    diagnostico: schema.string([rules.alpha({ allow: ['space'] })]),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {}
}
