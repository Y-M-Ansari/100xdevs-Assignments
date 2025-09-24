import { getClient } from  './utils.js';

async function createTable (){
   const client = await getClient();
   const userTableQuery = `
      CREATE TABLE IF NOT EXISTS usersTodos(
         id SERIAL PRIMARY KEY,
         email VARCHAR (255) UNIQUE NOT NULL,
         password VARCHAR (255) NOT NULL
      );
   `;
   const result = await client.query(userTableQuery);

   const todoTableQuery = `
      CREATE TABLE IF NOT EXISTS todos (
         id SERIAL PRIMARY KEY,
         user_id INTEGER REFERENCES users(id),
         title TEXT NOT NULL,
         description TEXT,
         done BOOLEAN DEFAULT FALSE 
      );
   `;
   await client.query(todoTableQuery);

   console.log(result);
}

createTable();