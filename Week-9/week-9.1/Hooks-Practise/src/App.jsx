import { useEffect, useState } from 'react'
import axios from "axios";


function useTodos(){
  const [todos , setTodos] = useState([]);

  useEffect(()=> {
    axios.get("https://dummy-json.mock.beeceptor.com/todos")
      .then(res =>{
        setTodos(res.data.todos);
      })
      .catch(err => {
        console.error("Error fetching todos",err)
      })
  } ,[])

  return todos;
}
function App() {
  const todos = useTodos();
  return (
    <>
      {todos.map(todo => <Track key={todo.id} todo={todo} /> )}
    </>
  )
}

function Track({todo}){
  return <div>
    <h1>{todo.title}</h1>
    <p> {todo.completed ? "completed" : "Not completed"} </p>
  </div>
}

export default App
