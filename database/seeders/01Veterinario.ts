import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Veterinario from 'App/Models/Veterinario'

export default class extends BaseSeeder {
  public async run() {
    await Veterinario.createMany([
      {
        nome: 'Hugo',
        endereco: 'Qno 3',
        telefone: 123456,
      },
    ])
    // Write your database queries inside the run method
  }
}
