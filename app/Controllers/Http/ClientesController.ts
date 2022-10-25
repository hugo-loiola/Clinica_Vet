/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cliente from 'App/Models/Cliente'

export default class ClientesController {
  async index() {
    return await Cliente.query().preload('animais')
  }
  async store({ request }) {
    const dados = request.only(['nome', 'endereco', 'telefone', 'cpf'])
    return await Cliente.create(dados)
  }
  async show({ request }) {
    const id = request.param('id')
    return await Cliente.findOrFail(id)
  }
  async destroy({ request }) {
    const id = request.param('id')
    const cliente = await Cliente.findOrFail(id)
    return await cliente.delete()
  }
  async update({ request }) {
    const id = request.param('id')
    const cliente = await Cliente.findOrFail(id)
    const dados = request.only(['nome', 'endereco', 'telefone', 'cpf'])
    await cliente.merge(dados).save()

    return cliente
  }
}
