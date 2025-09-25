import { getClient } from "./utils.js";

async function updateTodos(todoId:number){
   const client = await getClient();
   const updateTodoText:string = `UPDATE todos SET done = $1 WHERE id = $2`;
   await client.query(updateTodoText, [true , todoId]);

   console.log(`todo with ID ${todoId} updated to done as true!`);
}

const todoIdToUpdate:number = 2;
updateTodos(todoIdToUpdate);