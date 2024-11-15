import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
  const {user} = useContext(UserContext)

  if(!user) return <div className='text-center w-1/2'>Please Login</div>

  if(user) return <div className='text-center w-1/2'>WelCome {user.userName}</div>
}

export default Profile