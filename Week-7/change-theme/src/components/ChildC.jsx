import { useContext } from "react"
import { ThemeContext } from "../context"

export function ChildC(){
   const {Theme , setTheme} = useContext(ThemeContext);
   return <div>
      <button onClick={()=>{
         if (Theme==='light') 
            setTheme('dark')
         else 
            setTheme('light')
      }}>Change Theme</button>
   </div>
}