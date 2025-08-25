import React , {Fragment} from "react"
import {useState} from "react"
function App(){
  return (
    <div>
      <HeaderWithButton></HeaderWithButton> 
      <Header state="Malik"></Header>
      <Header state="Mohit"></Header>
      <Header state="Awasthi"></Header>
    </div >
  )
}
function HeaderWithButton(){
  const [state , setState] = useState("Yousuf");
  function changeTitle(){
    setState(Math.random());
  }
  return (
    <div>
      <button onClick={changeTitle}>Click me to change the Title</button>
      <Header state={state}></Header>
    </div>
  )
}
function Header ({state}){
  return (
    <div>
      My name is {state}.
    </div>
  )
}
export default App
