import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'veterinarios'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nome', 100).notNullable()
      table.float('salario').notNullable()
      table.string('endereco').notNullable()
      table.string('telefone').notNullable()
      table.string('cpf').notNullable()
      table.string('cep')
      table.string('logradouro', 100)
      table.string('complemento', 50)
      table.string('numero', 10)
      table.string('bairro', 50)

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
