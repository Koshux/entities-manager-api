'use strict'

const Database = use('Database')

async function setup () {
  try {
    const databaseName = Database.connection().config.database
    await Database.raw(`CREATE DATABASE ${databaseName}`)
    console.log(`Database '${databaseName}' created successfully.`)
  } catch (error) {
    console.error('Error creating the database:', error)
  } finally {
    process.exit(0)
  }
}
