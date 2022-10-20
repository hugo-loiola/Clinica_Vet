import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Consulta from 'App/Models/Consulta'

export default class extends BaseSeeder {
  public async run() {
    await Consulta.createMany([{}])
    // Write your database queries inside the run method
  }
}
