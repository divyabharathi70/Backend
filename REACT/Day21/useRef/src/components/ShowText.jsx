import { useRef } from "react"

const ShowText = () => {
    const text = useRef("")

    const showText = ()=>{
        text.current.innerText = "useRef Process"
    }
  return (
    <div>
        <h3 ref={text}></h3>
        <button onClick={showText}>ShowText</button>
    </div>
  )
}

export default ShowText