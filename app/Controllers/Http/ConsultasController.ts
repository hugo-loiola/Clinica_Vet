/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Consulta from 'App/Models/Consulta'

export default class ConsultasController {
  async index() {
    return await Consulta.query().preload('animal').preload('veterinario')
  }
  async store({ request }) {
    const dados = request.only([
      'vetId',
      'animalId',
      'dataConsulta',
      'horaConsulta',
      'valor',
      'diagnostico',
    ])
    return await Consulta.create(dados)
  }

  async show({ request }) {
    const id = request.param('id')
    return await Consulta.findOrFail(id)
  }
  async destroy({ request }) {
    const id = request.param('id')
    const consulta = await Consulta.findOrFail(id)
    return await consulta.delete()
  }
  async update({ request }) {
    const id = request.param('id')
    const consulta = await Consulta.findOrFail(id)
    const dados = request.only([
      'vetId',
      'animalId',
      'dataConsulta',
      'horaConsulta',
      'valor',
      'diagnostico',
    ])
    await consulta.merge(dados).save()

    return consulta
  }
}
