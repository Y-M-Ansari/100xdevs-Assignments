import {useEffect,useState,useCallback,memo} from "react"


function App() {
  const [exchange1, setexcahnge1] = useState({});
  const [exchange2, setexcahnge2] = useState({});
  const [bankData, setBankData]  = useState({});

  console.log('hi there')
  useEffect(()=>{
    setTimeout(()=>{
      setexcahnge1({returns :100});
    })
  },[]);

  useEffect(()=>{
    setTimeout(()=>{
      setexcahnge2({returns :100});
    },1000)
  },[]);

  useEffect(()=>{
    setTimeout(()=>{
      setBankData({income :100});
    },3000)
  },[]);

  const cryptoReturns = useCallback(function(){
    return exchange1.returns + exchange2.returns;
  },[exchange1,exchange2])

  const incomeTax = (cryptoReturns() + bankData.income) * 0.3
  return (
    <div>
      <Child cryptoReturns={cryptoReturns}></Child>
      hi there , your income tax returns are {incomeTax}.
    </div>

  )
}

const Child = memo(function({cryptoReturns}){
  console.log("hi from child component.")
  return <div>
    Hi there , your cryptoReturns is {cryptoReturns()}
  </div>
})
export default App
