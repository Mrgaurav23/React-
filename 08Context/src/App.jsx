import { useState } from 'react'
import UserContextProvider from './Context/UserContextprovider'
import Profile from './Component/Profile'
import Login from './Component/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
