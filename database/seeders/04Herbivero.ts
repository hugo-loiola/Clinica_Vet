import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Herbivoro from 'App/Models/Herbivoro'

export default class extends BaseSeeder {
  public async run() {
    await Herbivoro.createMany([
      {
        animalId: 1,
        altura: 25,
        peso: 5,
      },
      {
        animalId: 2,
        altura: 23,
        peso: 3,
      },
      {
        animalId: 3,
        altura: 0.3,
        peso: 0.8,
      },
    ])
    // Write your database queries inside the run method
  }
}
