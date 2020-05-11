// Update with your config settings.

module.exports = {


  //npx knex migrate:make nome_da_migration para criar migrations 
    development: {
      client: 'sqlite3',
      connection: {
        filename: './src/database/db.sqlite'
      },
      migrations:{
        directory: './src/database/migrations'
      },
      useNullAsDefault: true,
    },
  
    staging: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },
  
    production: {
      client: 'postgresql',
      connection: process.env.DATABASE_URL,
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        directory: __dirname + '/src/database/migrations' ,
        tableName: 'knex_migrations'
      }
    }
  
  };
  