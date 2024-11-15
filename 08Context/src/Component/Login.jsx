import React, { useState , useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [userName,setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const SubmitHandler = (e)=>{
        e.preventDefault()
        setUser({userName,password})
    }
  return (
    <>
    <div className='flex justify-center align-middle flex-col p-5 m-5 w-1/2 text-center rounded-lg'>
    <h2 className='text-5xl mb-5'>LOGIN</h2>
    <input type="text" placeholder='Username' value={userName} onChange={(e)=>setUserName(e.target.value)} className='mb-5 p-3 text-black'/>{" "}
    <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} className='p-3 text-black'/>
    <button className='w-full bg-orange-200 mt-3 text-black text-2xl rounded-full' onClick={SubmitHandler}>Submit</button>
    </div>
    </>
  )
}

export default Login