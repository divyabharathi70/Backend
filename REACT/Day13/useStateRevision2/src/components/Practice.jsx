import React, { useState } from 'react'

const App = () => {
  const [ip,setIp] = useState("")

  const handleIp = (e) =>{
    setIp(e.target.value)     // irregular as onchange trigger the odd even condition
    if(ip%2==0){
      alert("Even")
    }
    else{
      alert("Odd")
    }
  }
  return (
    <div>
      <input placeholder = "Enter your Name" onChange={(e)=>handleIp(e)}/>
      <h2>{ip}</h2>
    </div>
  )
}

export default App
