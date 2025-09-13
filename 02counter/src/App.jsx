import { useState } from 'react'

function App() {
  let [counter,setCounter] = useState(0)
  let addValue = ()=> {
    if(counter < 100){
      setCounter(counter + 10);
    }
  }
  let removeValue = ()=>{
    if(counter > 0){
      setCounter(counter - 10);
    }
  }
  return (
    <>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue} >increment</button>
      <button onClick={removeValue} >decrement</button>
    </>
  )
}

export default App