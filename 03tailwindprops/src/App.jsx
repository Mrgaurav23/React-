import { useState } from 'react'
import Card from '../Component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-500 text-black p-4 rounded-xl mb-5 text-center'>Tailwind CSS Learning</h1>
    <Card cardName = "Mountain" btnText = "click me" />
    <Card cardName = "Beach" btnText = "Visit me" />
    </>
  )
}

export default App
