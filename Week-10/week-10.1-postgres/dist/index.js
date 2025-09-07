import { Client } from 'pg';
async function insertData() {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'DemoDB',
        password: "Postgres",
        user:'postgres'
    });
    try {
        await client.connect();
        const insertQuery = "INSERT INTO students (name , id) VALUES ('nitish' , '1')";
        const res = await client.query(insertQuery);
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
//# sourceMappingURL=index.js.map