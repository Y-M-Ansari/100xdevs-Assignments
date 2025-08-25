import {useState, useRef} from 'react'

export default function InputFocus(){

   const inputRef = useRef(null);

   function Focus(){
      inputRef.current.focus(); 
   }
   return <div>
      <input 
         type = "text" 
         ref = {inputRef}
         placeholder = 'input'
      />
      <button onClick={Focus}>Focus on Input</button>
   </div>
}