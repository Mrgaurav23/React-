import { useState } from 'react'

function App() {
  const [color,setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-3 py-2 shadow-lg bg-white rounded-lg gap-3' >
        <button className='outline-none px-4 py-1 rounded-3xl' style={{backgroundColor:"red"}} onClick={() => setColor("red")}>
          red
        </button>
        <button className='outline-none px-4 py-1 rounded-3xl' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>
          green
        </button>
        <button className='outline-none px-4 py-1 rounded-3xl' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>
          blue
        </button>
        <button className='outline-none px-4 py-1 rounded-3xl' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>
          yellow
        </button>
      </div>
    </div>
  )
}

export default App
