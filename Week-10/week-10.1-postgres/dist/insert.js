import { Client } from 'pg';
async function insertData() {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'DemoDB',
        password: "Postgres",
        user: 'postgres'
    });
    try {
        await client.connect();
        const insertQuery = "INSERT INTO users ( username, email, password ) VALUES ($1, $2, $3)";
        const values = ['Nitish', 'nitish@gmail.com', 'yadav'];
        const res = await client.query(insertQuery, values);
        console.log("Insertion success", res);
    }
    catch (err) {
        console.error('Error during the insertion', err);
    }
    finally {
        await client.end();
    }
}
insertData();
//# sourceMappingURL=insert.js.map