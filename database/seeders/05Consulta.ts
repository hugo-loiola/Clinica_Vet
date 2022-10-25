import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Consulta from 'App/Models/Consulta'

export default class extends BaseSeeder {
  public async run() {
    await Consulta.createMany([
      {
        veterinarioId: 1,
        animalId: 1,
        dataConsulta: new Date(2022, 10, 19),
        horaConsulta: new Date(2022, 10, 19, 21, 30),
        valor: 200,
        diagnostico: 'Cachorro muito debilitado com sérios ferimentos em suas costas',
      },
    ])
    // Write your database queries inside the run method
  }
}
