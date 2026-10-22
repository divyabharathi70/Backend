import { useRef, useState } from "react"

const BackGroundColor_useRefState = ()=>{
  const container = useRef(null)
  // const [toggle,setToggle] = useState(true)

  const handleChange = ()=>{
    container.current.style.backgroundColor = "red"
  }
  
  // const changeUsingState = ()=>{
  //    setToggle(!toggle)
  // }
  return (
    <>
       <div ref={container} style={{backgroundColor : "blue"}}>
      <button onClick={handleChange}>Change</button>
    </div>

    {/* <div style={{toggle ? backgroundColor : 'red' : backgroundColor :"blue"}}>

      <button  onClick={changeUsingState}>Change using state</button>
    </div> */}
    </>
   
  )
}

export default BackGroundColor_useRefState