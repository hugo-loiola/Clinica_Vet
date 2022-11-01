import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VeterinarioValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([rules.alpha({ allow: ['space'] }), rules.maxLength(100)]),

    salario: schema.number([rules.range(1, 10000)]),

    telefone: schema.string([
      rules.regex(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/),
      rules.mobile({ locale: ['pt-BR'] }),
      rules.unique({ table: 'alunos', column: 'telefone' }),
    ]),

    cep: schema.string.nullableAndOptional([rules.regex(/[0-9]{5}-[\d]{3}/)]),

    cpf: schema.string([
      rules.unique({ table: 'alunos', column: 'id' }),
      rules.regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/),
    ]),

    logadouro: schema.string.nullableAndOptional([
      rules.alpha({ allow: ['space'] }),
      rules.maxLength(100),
    ]),

    complemento: schema.string.nullableAndOptional([
      rules.maxLength(100),
      rules.alpha({ allow: ['space'] }),
    ]),

    numero: schema.string.nullableAndOptional([
      rules.unique({
        column: 'numero',
        table: 'alunos',
      }),
      rules.alphaNum({ allow: ['dash', 'space'] }),
      rules.maxLength(120),
    ]),

    bairro: schema.string.nullableAndOptional([
      rules.alpha({ allow: ['space'] }),
      rules.maxLength(120),
    ]),
  })

  public messages: CustomMessages = {
    'maxLength': 'o número máximo de caractéres do campo {{ field }} é de {{ options.maxLength }}',
    'minLength': 'o número máximo de caractéres do campo {{ field }} é de {{ options.minLength }}',
    'required': 'o campo {{ field }} é obrigatório',
    'unique': 'o campo {{ field }} é único',
    'cpf.regex': 'o cpf tem a formatação 666.666.666-13',
    'cep.regex': 'o cep tem a formatação 12345-67',
    'telefone.regex': 'o telefone tem a formatação (00)9999-9999',
    'range': '{{ field }} pode ser de {{ options.range }}',
  }
}
