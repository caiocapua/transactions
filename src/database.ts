import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL Not found!')
}

export const config: Knex.Config = {
  client: 'sqlite3', // qual banco usar
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './database/migrations',
  },
}

export const knex = setupKnex(config)