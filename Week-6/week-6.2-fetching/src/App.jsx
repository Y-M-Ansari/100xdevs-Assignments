import { useEffect, useState } from "react";

function App() {
  const [selectedId , setSelectedId] = useState(1);

  return (
    <>
      <button onClick={()=>{
        setSelectedId(1)
      }}>1</button>
      <button onClick={()=>{
        setSelectedId(2)
      }}>2</button>
      <button onClick={()=>{
        setSelectedId(3)
      }}>3</button>
      <button onClick={()=>{
        setSelectedId(4)
      }}>4</button>
     <Todo id = {selectedId}></Todo>
    </>
  )
}
function Todo({id}){
  const [todo , setTodos] = useState({});
// https://sum-server.100xdevs.com/todo?id=1
  useEffect(()=>{
    fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then(async function(response){
      const data = await response.json()
      setTodos(data.todo);
  })
  },[id]);

  return <div>
    id={id} <br />
    <h1>{todo.title}</h1>
    <h5>{todo.description}</h5>
  </div>  
}

export default App
