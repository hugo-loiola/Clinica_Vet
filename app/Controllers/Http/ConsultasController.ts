/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Consulta from 'App/Models/Consulta'
import ConsultaValidator from 'App/Validators/ConsultaValidator'

export default class ConsultasController {
  async index() {
    return await Consulta.query()
  }
  async store({ request }) {
    const dados = await request.validate(ConsultaValidator)
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
    const dados = await request.validate(ConsultaValidator)
    await consulta.merge(dados).save()

    return consulta
  }
}
