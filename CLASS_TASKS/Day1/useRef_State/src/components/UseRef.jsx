import { useRef} from "react"

const BackGroundColor_useRefState = ()=>{
  const container = useRef(null)

  const handleChange = ()=>{
    container.current.style.backgroundColor = "white"
  }
  
  return (
    <>
       <div ref={container} style={{backgroundColor : "pink", padding : "10px" ,display: "flex" , justifyContent: "center", alignContent:"center", height:"200px"}}>
          <button onClick={handleChange} style={{height: "30px"}}>Change</button>
      </div>
    </>
   
  )
}

export default BackGroundColor_useRefState