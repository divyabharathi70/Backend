import { useState } from "react"

const BackGroundColor_useRefState = ()=>{
  const [toggle,setToggle] = useState(true)

  const changeUsingState = ()=>{
     setToggle(!toggle)
  }

  return (
    <>
       <div style={{backgroundColor : toggle ? "purple" : "pink",   padding : "10px" ,display: "flex" , justifyContent: "center", alignContent:"center", height:"200px"}}>
          <button  onClick={changeUsingState} style={{height: "30px"}}>Change using state</button>
      </div>
    </>
   
  )
}

export default BackGroundColor_useRefState