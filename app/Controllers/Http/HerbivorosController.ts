/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Herbivoro from 'App/Models/Herbivoro'

export default class HerbivorosController {
  async index() {
    return await Herbivoro.query().preload('animal')
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
    const herbivoro = await Herbivoro.findOrFail(id)
    return await herbivoro.delete()
  }
  async update({ request }) {
    const id = request.param('id')
    const herbivoro = await Herbivoro.findOrFail(id)
    const dados = request.only(['animalId', 'altura', 'peso'])
    await herbivoro.merge(dados).save()

    return herbivoro
  }
}
