import { Client } from "pg";
export async function getClient() {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'DemoDB',
        user: 'postgres',
        password: 'Postgres'
    });
    await client.connect();
    return client;
}
//# sourceMappingURL=utils.js.map