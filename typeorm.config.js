const path = require('path');
const fs = require('fs');

const builtFileName = process.argv[2]

const defaultConfig = {
  type: 'postgres',
  host: 'localhost',
  port: 4444,
  synchronize: false,
  entities: ['src/**/*.entity{.ts,.js}'],
  migrations: ['src/db/migration/*.ts'],
  cli: {
    migrationsDir: 'src/db/migration'
  }
};

const development = {
  username: 'postgres',
  password: 'password',
  database: 'poll_system_development'
};

const test = {
    username: 'postgres',
    password: 'password',
    database: 'poll_system_test'
};

const production = {
    username: 'postgres',
    password: 'password',
    database: 'poll_system_prod'
};

const configMap = {
  development: {...defaultConfig, ...development},
  test: {...defaultConfig, ...test},
  production: {...defaultConfig, ...production}
};

const environment = process.env.NODE_ENV || 'development';
const config = configMap[environment];

// For running typeorm through npm script, cli will look for specific config
fs.writeFileSync(builtFileName, JSON.stringify(config, null, 2))

module.exports = configMap[environment];
