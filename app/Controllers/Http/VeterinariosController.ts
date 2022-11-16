/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Veterinario from 'App/Models/Veterinario'
import VeterinarioUpdateValidator from 'App/Validators/VeterinarioUpdateValidator'
import VeterinarioValidator from 'App/Validators/VeterinarioValidator'

export default class VeterinariosController {
  async index() {
    return await Veterinario.query().preload('consulta').preload('animal')
  }
  async store({ request }) {
    const dados = await request.validate(VeterinarioValidator)
    return await Veterinario.create(dados)
  }
  async show({ request }) {
    const id = request.param('id')
    return await Veterinario.findOrFail(id)
  }
  async destroy({ request }) {
    const id = request.param('id')
    const veterinario = await Veterinario.findOrFail(id)
    await veterinario.delete()
    return { message: 'Veterinário deletado!' }
  }
  async update({ request }) {
    const id = request.param('id')
    const veterinario = await Veterinario.findOrFail(id)
    const dados = await request.validate(VeterinarioUpdateValidator)
    await veterinario.merge(dados).save()

    return veterinario
  }
}
