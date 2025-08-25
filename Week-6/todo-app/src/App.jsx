import {useState} from "react"
import React from "react"

function App(){
  const [todos , setTodo] = useState([
    {
      id :1,
      title:"Go to Gym",
      description:"Timing -> 6 AM to 7 AM",
      completed: "Mark as Done"
    },
    {
      id :2,
      title:"Go to College",
      description:"Timing -> 10 AM to 5 PM",
      completed: "Mark as Done"
    },
    {
      id :3,
      title:"Study DSA",
      description:"Timing -> 7 PM to 9 PM",
      completed: "Mark as Done"
    }
  ])

  function AddNewTodo(){
    setTodo([...todos,{
      id : Math.random(),
      title:"New Todo",
      description:"This is New Todo",
      completed: "Mark as Done"
    }]);
  }
  
  return (
    <>
      <button onClick={AddNewTodo}>Add new Todo</button>
      { todos.map(function(todo){
        return <EachTodo key={todo.id} todo = {todo} ></EachTodo>
      })}
    </>
  )
}

const EachTodo = React.memo(function ({todo}){
  return (
    <div>
      <h1>{todo.title}</h1>
      <h3>{todo.description}</h3>
      <h3>{todo.completed}</h3>
    </div>
  )
})
export default App 