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
        bairro: 'Setor O',
      },
      {
        nome: 'Luís Henrique',
        salario: 3600.5,
        endereco: 'Qnp 15',
        telefone: '(61)998457735',
        cpf: '703.570.128-45',
        cep: '72250-308',
        logradouro: 'Conjunto H',
        complemento: 'A',
        numero: '37',
        bairro: 'Setor O',
      },
      {
        nome: 'Hugo Loiola de Queiroz',
        salario: 5000.8,
        endereco: 'Qno 3',
        telefone: '(61)991862235',
        cpf: '073.057.821-65',
        cep: '72250-308',
        logradouro: 'Conjunto H',
        complemento: 'A',
        numero: '37',
        bairro: 'Setor O',
      },
    ])
    // Write your database queries inside the run method
  }
}
