import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Veterinario from 'App/Models/Veterinario'

export default class extends BaseSeeder {
  public async run() {
    await Veterinario.createMany([
      {
        nome: 'Hugo Loiola de Queiroz',
        salario: 2300.7,
        endereco: 'Qno 3',
        telefone: '(61)991862235',
        cpf: '073.057.821-65',
        cep: '72250-308',
        logradouro: 'Conjunto H',
        complemento: 'A',
        numero: '37',
        bairro: 'Ceilãndia',
      },
      {
        nome: 'Luís Henrique',
        salario: 3600.5,
        endereco: 'Qnp 15',
        telefone: '(61)998457735',
        cpf: '240.098.720-39',
        cep: '72225-176',
        logradouro: 'QNN 17 Conjunto F',
        numero: '8',
        bairro: 'Ceilãndia Norte',
      },
      {
        nome: 'Esther Cardoso',
        salario: 5000.8,
        endereco: 'Qno 3',
        telefone: '(61)991862235',
        cpf: '845.225.390-70',
        cep: '73030-053',
        logradouro: 'Quadra 5 Conjunto C',
        complemento: 'B',
        numero: '3',
        bairro: 'Sobradinho',
      },
    ])
    // Write your database queries inside the run method
  }
}
