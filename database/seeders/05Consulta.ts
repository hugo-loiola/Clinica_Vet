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
        valor: 50.95,
        diagnostico:
          'alopecia; coceira; vermelhidão ou hiperpigmentação; odor forte; perda de peso.',
      },
      {
        veterinarioId: 2,
        animalId: 2,
        dataConsulta: new Date(2022, 10, 19),
        horaConsulta: new Date(2022, 10, 19, 21, 30),
        valor: 150.3,
        diagnostico: 'Gato vomitando; Diarreia; Febre; Falta de ar; Anorexia; Tosse; Dor muscular',
      },
      {
        veterinarioId: 3,
        animalId: 3,
        dataConsulta: new Date(2022, 10, 19),
        horaConsulta: new Date(2022, 10, 19, 21, 30),
        valor: 200.5,
        diagnostico:
          'Apatia; Penas eriçadas; Anorexia Desidratação; Conjuntivite Problemas respiratórios; Alteração na coloração das fezes;',
      },
    ])
    // Write your database queries inside the run method
  }
}
