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
      {
        clienteId: 2,
        nome: 'Kiara',
        tipo: 'Gato',
        raca: 'Persa',
        idade: 4,
        alergia: 'não',
      },
      {
        clienteId: 3,
        nome: 'Paçoca',
        tipo: 'Ave',
        raca: 'Calopsita',
        idade: 1,
        alergia: 'não',
      },
    ])
    // Write your database queries inside the run method
  }
}
