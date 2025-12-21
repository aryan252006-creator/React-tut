import React, { useEffect, useState } from 'react'
import axios from'axios'

const App = () => {
  const [userData , setUserData] = useState([]);
  const getData = async()=>{
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=15")
    setUserData(response.data)
    
    
    
  }
  useEffect(function(){
    getData()

  },[])

  let printUserData = 'No user Available'
  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return<div key={idx}>
      <div className='h-40 w-40 bg-amber-300 rounded-xl overflow-hidden'>
        <img  className='h-full object-cover'  src={elem.download_url}></img>
      </div>
      <h2>{elem.author}</h2>
      </div> 
    })
  }
  return (
    <div className='bg-black h-screen p-4 text-white '>
     
  <div className='flex flex-wrap gap-2'>
    {printUserData}

  </div>
    
    </div>
  )
}

export default App
