import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  /*
  const [data,setData] = useState([])

  useEffect( () => {
    fetch(`https://api.github.com/users/Mrgaurav23`)
    .then(response => response.json())
    .then(data => {
        setData(data);
      }
    )
  },[])
  */
  return (
    <div className='bg-gray-700 text-center text-4xl font-xl text-white'>Github Followers : {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300}/>
    </div>
  )
}

export default Github

export const githubLoaderInfo = async () => {
  const response = await fetch('https://api.github.com/users/Mrgaurav23')
  return response.json();
}