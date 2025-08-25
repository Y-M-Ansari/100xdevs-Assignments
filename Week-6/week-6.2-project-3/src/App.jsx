import { useState ,useMemo } from "react"

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue , setInputValue] = useState(1);

  function add(n){
    return ((n+1)*n)/2 ;
  }
  const sum = useMemo(()=>{add(inputValue)}, [inputValue]);

  return (
    <>
      <input type="number" onChange={function (e){
        setInputValue(Number(e.target.value));
      }} placeholder="Enter a natural number" /><br />

      <p>Sum of first {inputValue} natural number(s) is {sum}</p>

      <button onClick={()=>{setCounter(counter + 1)}}> Counter {counter} </button>
    </>
  )
}

export default App
