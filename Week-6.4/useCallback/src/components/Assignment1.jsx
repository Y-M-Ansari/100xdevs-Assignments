import { useCallback, useState ,memo } from "react"

export function Assignment1() {
  const [count, setCount] = useState(0)

  const increment = useCallback(()=> setCount(count => count + 1),[]);
  const decrement = useCallback(()=> setCount(count => count - 1),[]);
  
   return (
    <>
      <p>Count={count}</p>
      <CounterButtons increment={increment} decrement={decrement}></CounterButtons>
    </>
   )
}

const  CounterButtons = memo(function({increment, decrement}){
   console.log("re-rendered")
  return <div>
    <button onClick={increment}>Increment</button> <br /><br />
    <button onClick={decrement}>Decrement</button>
  </div>
})
