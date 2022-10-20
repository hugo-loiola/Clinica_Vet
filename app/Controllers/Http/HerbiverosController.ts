/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Herbivoro from 'App/Models/Herbivoro'

export default class HerbiverosController {
  async index() {
    return await Herbivoro.query()
  }
  async store({ request }) {
    const dados = request.only(['animalId', 'altura', 'peso'])
    return await Herbivoro.create(dados)
  }
  async show({ request }) {
    const id = request.param('id')
    return await Herbivoro.findOrFail(id)
  }
  async destroy({ request }) {
    const id = request.param('id')
    const herbivero = await Herbivoro.findOrFail(id)
    return await herbivero.delete()
  }
  async update({ request }) {
    const id = request.param('id')
    const herbivero = await Herbivoro.findOrFail(id)
    const dados = request.only(['animalId', 'altura', 'peso'])
    await herbivero.merge(dados).save()

    return herbivero
  }
}
