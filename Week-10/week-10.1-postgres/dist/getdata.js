import { Client } from "pg";
async function getUser(username) {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'DemoDB',
        user: 'postgres',
        password: "Postgres"
    });
    try {
        await client.connect();
        const query = `SELECT * FROM users WHERE username = $1`;
        const result = await client.query(query, [username]);
        if (result.rows.length > 0) {
            console.log('User found :', result.rows[0]);
            return result.rows[0];
        }
        else {
            console.log('No user found with the given name.');
            return null;
        }
    }
    catch (err) {
        console.log('Error during fetching user', err);
        throw err;
    }
    finally {
        await client.end();
    }
}
console.log(getUser('Yousuf'));
console.log(getUser('Yousuf'));
getUser('Yousuf').catch(console.error);
//# sourceMappingURL=getdata.js.map