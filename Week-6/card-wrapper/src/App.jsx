
function App() {
  return (
    <div>

      <CardWrapper>
        hi there
      <TextComponent/>

      </CardWrapper>
        <CardWrapper innercomponent ={<TextComponent/>}>
      </CardWrapper>

      <CardWrapper>
        <TextComponent/>
      </CardWrapper>

    </div>

  )
}

function CardWrapper({children,innercomponent}){
  return <div style={{
      border : "2px solid black",
      padding: 20,
    }}>
    {children}
    {/* {innercomponent} */}
  </div>
}

function TextComponent(){
  return <div>
    Hi there
  </div>
}


export default App
