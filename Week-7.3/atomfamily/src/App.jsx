import './App.css'
import {useRecoilValue, RecoilRoot} from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
 
  return (
    <RecoilRoot>
      <Todo id={1}  />
      <Todo id={2}  />
    </RecoilRoot>
  )
}
function Todo({id}){
  const  currentTodo = useRecoilValue(todosAtomFamily(id));
  return <div>
    {currentTodo.title}
    {currentTodo.description}
    <br />
  </div>
}

export default App
