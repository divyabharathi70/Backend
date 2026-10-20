import React, { useEffect, useState } from 'react'

const Home = () => {
  const [isActive,setisAcitive] = useState(null)
  useEffect(()=>{
    const getisActive = ()=>{
      let isActive = JSON.parse(localStorage.getItem("isActive"))
      setisAcitive(isActive)
    }
    getisActive()
  },[])
  return (
    <div>
      {isActive ?
        <div>
          <h3>{isActive.id}</h3>
          <h3>{isActive.name}</h3>
          <h3>{isActive.email}</h3>
        </div>               :  <h3>Not Registered</h3>
      }
    </div>
  )
}

export default Home