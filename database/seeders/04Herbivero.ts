import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Herbivoro from 'App/Models/Herbivoro'

export default class extends BaseSeeder {
  public async run() {
    await Herbivoro.createMany([
      {
        animalId: 1,
        altura: 50,
        peso: 20,
      },
    ])
    // Write your database queries inside the run method
  }
}
