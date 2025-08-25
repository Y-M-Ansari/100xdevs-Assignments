import { countAtom } from "./store/atoms/count";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

function App(){
  return <div>
    <RecoilRoot>
      <Count/>
    </RecoilRoot>
  </div>
}

function Count(){
  console.log("re-render");
  return <div>
    <CountRender></CountRender>
    <Button></Button>
  </div>
}

function CountRender(){
  console.log("CountRender re-render");
  const count  = useRecoilValue(countAtom);

  return <div>
    {count}
  </div>
}
function Button(){
  console.log("Button re-render");
  // const [count , setCount ] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={()=>{
      setCount(count => count + 1)
    }}>
      Increase
    </button>

    <button onClick={()=>{
      setCount( count => count - 1)
    }}>
      decrease
    </button>
  </div>
}

export default App