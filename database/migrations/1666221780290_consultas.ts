import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'consultas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('veterinario_id')
        .unsigned()
        .references('id')
        .inTable('veterinarios')
        .notNullable()
        .onDelete('CASCADE')
      table
        .integer('animal_id')
        .unsigned()
        .references('id')
        .inTable('animals')
        .notNullable()
        .onDelete('CASCADE')
      table.date('data_consulta').notNullable()
      table.date('hora_consulta').notNullable()
      table.float('valor').notNullable()
      table.text('diagnostico').notNullable()
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
