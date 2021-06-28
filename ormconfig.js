console.log('process.env.DATABASE_URL :>>',process.env.DATABASE_URL);
module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
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