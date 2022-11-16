/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Animal from 'App/Models/Animal'
import AnimalUpdateValidator from 'App/Validators/AnimalUpdateValidator'
import AnimalValidator from 'App/Validators/AnimalValidator'

export default class AnimalsController {
  async index() {
    return await Animal.query().preload('cliente').preload('herbivoro').preload('veterinaio')
  }
  async store({ request }) {
    const dados = await request.validate(AnimalValidator)
    return await Animal.create(dados)
  }
  async show({ request }) {
    const id = request.param('id')
    return await Animal.findOrFail(id)
  }
  async destroy({ request }) {
    const id = request.param('id')
    const aluno = await Animal.findOrFail(id)
    await aluno.delete()
    return { message: 'Animal deletado!' }
  }
  async update({ request }) {
    const id = request.param('id')
    const animal = await Animal.findOrFail(id)
    const dados = await request.validate(AnimalUpdateValidator)
    await animal.merge(dados).save()

    return animal
  }
}
