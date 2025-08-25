import { useState,useEffect,useRef } from "react"

function PreviousValue() {
  const [count, setCount] = useState(0)

  const prev = useRef(null);

  useEffect(()=>{
    prev.current = count;
  },[count])
  
  return (
    <>
      <p>Count Now : {count}   Count before : {prev.current}</p>
      <button onClick={()=>setCount(count => count + 1)}>Increment</button>
    </>
  )
}

export default PreviousValue
