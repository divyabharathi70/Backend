import React, { useState } from 'react'

const HideShow = () => {
    const [show,setShow] = useState(false)
  return (
    <div>
        <h1>{show? "Password is react123" : ""}</h1>
        <button onClick={()=>setShow(!show)}>{show? "Hide Password" : "Show Password"}</button>
    </div>
  )
}

export default HideShow
