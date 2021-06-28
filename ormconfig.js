console.log('process.env.DATABASE_URL :>>', process.env.DATABASE_URL);
module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "synchronize": true,
    "dropSchema": false,
    "logging": true,
    "ssl": {
        "ca": process.env.SSL_CERT,
    },
    "migrations": [
        "dist/database/migrations/*.js"
    ],
    "entities": [
        "dist/entities/*.js"
    ],
    "cli": {
        "migrationsDir": "src/database/migrations",
        "entitiesDir": "src/entities"
    }
}