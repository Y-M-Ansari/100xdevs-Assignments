import { useRef, useState } from "react";

export default function CountRerendering (){
   const [count, setCount] = useState(0);
   const reRenderCount = useRef(0);
   const handleReRender = () => setCount (count => count + 1)
   reRenderCount.current = reRenderCount.current + 1;
   return <div>
      <p>Component Re-rendered {reRenderCount.current} times.</p>
      <button  onClick={handleReRender}>Force to Re-render</button>
   </div>
}

