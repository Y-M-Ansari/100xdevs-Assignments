import { Client } from "pg";
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'DemoDB',
    user: 'postgres',
    password: 'Postgres',
});
async function createUsersTable() {
    await client.connect();
    const result = await client.query(`
      CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) UNIQUE NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
   `);
    console.log(result);
}
createUsersTable();
//# sourceMappingURL=creating_table.js.map