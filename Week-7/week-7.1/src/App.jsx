import { BrowserRouter, Routes, Route, useNavigate}  from 'react-router-dom'

import {lazy, Suspense} from 'react'


const  Dashboard = lazy(()=> import('./components/dashboard'))
const  Landing = lazy(()=> import('./components/landing'))

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>

          <Route path="/dashboard" element={
            <Suspense fallback={
              <h1>Loading.....</h1>
            }><Dashboard /></Suspense>
          }></Route>

          <Route path="/" element={
            <Suspense fallback={<h1>Loading.....</h1>}>
              <Landing />
            </Suspense>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}
function Appbar(){
  const  navigate = useNavigate();
  console.log(navigate);
  return(
    <div>
      <button onClick={()=>{
        // window.location.href = "/";
        navigate("/")
      }}>Landing Page</button>
      <button onClick={()=>{
        // window.location.href = "/dashboard";
        navigate("/dashboard")
      }}>Dashboard</button>
    </div> 
  )
}
export default App
