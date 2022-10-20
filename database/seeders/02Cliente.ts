import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run() {
    await Cliente.createMany([
      {
        nome: 'Luísa',
        endereco: 'QNN 19',
        telefone: 6199911,
        cpf: '015.678.754-98',
      },
    ])
    // Write your database queries inside the run method
  }
}
