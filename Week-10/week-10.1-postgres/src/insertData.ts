import { getClient } from "./utils.js";

async function createEntries(){
   const client = await getClient();

   const insertUsertext = `INSERT INTO userstodos (email, password) VALUES ($1, $2) RETURNING id `;

   const userValues = ['nitish@gmail.com', 'nitish']

   let response = await client.query(insertUsertext,userValues);

   console.log(response);

   const insertTodoText = `INSERT INTO todos (user_id, title, description, done) VALUES ($1, $2, $3, $4) RETURNING id` 

   const todosValues = [response.rows[0].id, 'Gym', 'Go to gym at 7 pm',false];
   await client.query(insertTodoText, todosValues);

   console.log('Entries created !');
}

createEntries();