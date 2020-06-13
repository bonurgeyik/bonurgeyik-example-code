module.exports = {
    test: {
      db: {
        username: "postgres",
        password: "123123",
        database: "bibliu_test",
        host: "localhost",
        dialect: 'postgres',
        port: '5432',
        logging: false,
        force: true
      }

    },
    development: {
      db: {
        username: "postgres",
        password: "123123",
        database: "bibliu",
        host: "localhost",
        dialect: 'postgres',
        port: '5432',
        logging: false
      }
  
    },
    production: {
      db: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        use_env_variable: 'DATABASE_URL',
        logging: false 
      }
    }
  };