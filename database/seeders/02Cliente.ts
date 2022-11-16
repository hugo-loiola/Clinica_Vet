import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run() {
    await Cliente.createMany([
      {
        nome: 'Luisa',
        endereco: 'QNN 19',
        telefone: '(61) 9135-9604',
        cpf: '015.678.754-98',
        numero: '31',
        cep: '72225-192',
        logradouro: 'Conjunto B',
        bairro: 'QNN 19',
      },
      {
        nome: 'Joaquim Jesus',
        endereco: 'AOS 6 Bloco E',
        telefone: '(61) 2559-7254',
        cpf: '008.944.961-40',
        numero: '31',
        cep: '70660-065',
        bairro: 'Area Octogonal',
      },
      {
        nome: 'Thales Costa',
        endereco: 'QR 1-A Conjunto P',
        telefone: '(61) 3647-4331',
        cpf: '374.653.221-38',
        numero: '31',
        cep: '72225-192',
        bairro: 'Candangolandia',
      },
    ])
    // Write your database queries inside the run method
  }
}
