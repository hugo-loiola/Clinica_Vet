/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Veterinario from 'App/Models/Veterinario'

export default class VeterinariosController {
  async index() {
    return await Veterinario.query()
  }
  async store({ request }) {
    const dados = request.only(['nome', 'endereco', 'telefone'])
    return await Veterinario.create(dados)
  }
  async show({ request }) {
    const id = request.param('id')
    return await Veterinario.findOrFail(id)
  }
  async destroy({ request }) {
    const id = request.param('id')
    const veterinario = await Veterinario.findOrFail(id)
    return await veterinario.delete()
  }
  async update({ request }) {
    const id = request.param('id')
    const veterinario = await Veterinario.findOrFail(id)
    const dados = request.only(['nome', 'endereco', 'telefone'])
    await veterinario.merge(dados).save()

    return veterinario
  }
}
