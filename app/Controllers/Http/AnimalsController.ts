/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Animal from 'App/Models/Animal'

export default class AnimalsController {
  async index() {
    return await Animal.query()
  }
  async store({ request }) {
    const dados = request.only(['clienteId', 'nome', 'tipo', 'raca', 'idade', 'alergia'])
    return await Animal.create(dados)
  }
  async show({ request }) {
    const id = request.param('id')
    return await Animal.findOrFail(id)
  }
  async destroy({ request }) {
    const id = request.param('id')
    const aluno = await Animal.findOrFail(id)
    return await aluno.delete()
  }
  async update({ request }) {
    const id = request.param('id')
    const animal = await Animal.findOrFail(id)
    const dados = request.only(['clienteId', 'nome', 'tipo', 'raca', 'idade', 'alergia'])
    await animal.merge(dados).save()

    return animal
  }
}
