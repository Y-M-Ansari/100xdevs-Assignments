import { getClient } from "./utils.js";
async function updateTodos(todoId) {
    const client = await getClient();
    const updateTodoText = `UPDATE todos SET done = $1 WHERE id = $2`;
    await client.query(updateTodoText, [true, todoId]);
    console.log(`todo with ID ${todoId} updated to done as true!`);
}
const todoIdToUpdate = 2;
updateTodos(todoIdToUpdate);
//# sourceMappingURL=update.js.map