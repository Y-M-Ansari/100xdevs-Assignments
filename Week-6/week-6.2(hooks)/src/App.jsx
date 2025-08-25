import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function App() {
  const [todos , setTodos] = useState([]);
  
  useEffect(()=>{
    axios.get("http://localhost:3000/todo") //backend from week-5(react) New Year app
    .then(function(response){
      console.log(response);
      console.log(response.data);
      console.log(response.data.todos)
      setTodos(response.data.todos)
    })
  },[]);
  return (
    <>
      {todos.map(todo => <Todo title={todo.title} description ={ todo.description}></Todo>)}
    </>
  )
}
const Todo = React.memo(function({title,description}){
  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
})
export default App
