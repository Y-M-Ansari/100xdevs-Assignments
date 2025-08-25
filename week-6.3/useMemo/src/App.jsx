import {useMemo,useEffect,useState} from "react"


function App() {
  const [excahnge1, setexcahnge1] = useState({});
  const [excahnge2, setexcahnge2] = useState({});
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
    })
  },[]);

  useEffect(()=>{
    setTimeout(()=>{
      setBankData({income :100});
    },3000)
  },[]);

  const cryptoReturns = useMemo(()=>{
    return excahnge1.returns + excahnge2.returns;
  }, [excahnge1,excahnge2])

  const incomeTax = (cryptoReturns + bankData.income) * 0.3
  return (
    <div>
      hi there , your income tax returns are {incomeTax}.
    </div>

  )
}

export default App
