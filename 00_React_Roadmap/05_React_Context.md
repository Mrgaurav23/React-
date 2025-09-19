## React Context ->

- React Context is a feature in React (introduced in version 16.3) that allows you to manage and share state globally across your React application without having to pass props down manually through every level of the component tree. It is especially useful when you have global data such as user authentication, themes, or localization settings that many components need to access.

# Key Components of React Context :-

1. ## `React.createContext()`
This is used to create a Context object. It provides two key components:
-    `Provider`: Supplies the data to its child components.
-    `Consumer`: Accesses the data provided by the `Provider`.

```jsx
//Usercontext file
import React from 'react';

const UserContext = React.createContext()

export default UserContext;
```
2. ## `Provider`
- The `Provider` component is used to wrap the part of your app that needs access to the context data. It accepts a `value` prop, which is the data to be shared.
```jsx
//UserContextProvider

import React, {useState} from 'react'
import UserContext from '../Context/UserContext';

const userContextProvider = ({children})=>{
    const [user,setUser] = useState(null);

    return(
        <UserContext.Provider value = {{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;
```

3. ## `Consumer`
- The `Consumer` component is used to access the context's value. It requires a function as a child, which receives the current context value.

```jsx
//App file
import UserContextProvider from '../context/UserContextProvider'

function App(){
    return (
        <UserContextProvider>
         <Login />
         <Profile />
        </UserContextProvider>
    )
}

export default App
```

```jsx
//Components
//Login

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

```

```jsx
//Component
//Profile
import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
  const {user} = useContext(UserContext)

  if(!user) return <div className='text-center w-1/2'>Please Login</div>

  if(user) return <div className='text-center w-1/2'>WelCome {user.userName}</div>
}

export default Profile
```
