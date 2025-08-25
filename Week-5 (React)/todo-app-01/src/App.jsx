import { useState } from 'react'
import './App.css'

function App(){
  const [todo, setTodo] = useState([{
    title:"Gym",
    description: "Go to gym 7 to 9",
    "task completed" :true
  },{
    title: "DSA",
    description: "Learn DSA by 9 to 12",
    "task completed" :false
  }])

  function newTodo(){
    setTodo([...todo], {
      title: "Go to Home",
      description : " Go to home at 9:30 pm "
    })
  }

  return (
      <div>
        {/* <Todo 
          title = {todo[0].title}
          description = {todo[0].description}
        /> */}
        <button onClick={newTodo}> Add New Todo</button>  
        {
          todo.map(function(eachtodo){
            return <Todo title={eachtodo.title}  description = {eachtodo.description}></Todo>
          })
        }
      </div>
  )
}

function Todo(props){
  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{props.description}</h1>
    </div>
  )
}
 
export default App
