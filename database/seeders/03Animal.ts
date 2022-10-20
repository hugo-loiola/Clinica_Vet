import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Animal from 'App/Models/Animal'

export default class extends BaseSeeder {
  public async run() {
    await Animal.createMany([
      {
        clienteId: 1,
        nome: 'Spike',
        tipo: 'Cachorro',
        raca: 'shih tzu',
        idade: 4,
        alergia: 'não',
      },
    ])
    // Write your database queries inside the run method
  }
}
