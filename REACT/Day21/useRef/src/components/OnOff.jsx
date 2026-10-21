import {useRef} from "react"

const OnOff = () => {
  const toggle = useRef(true)
  const onoff = useRef(toggle.current)

  const handleOn = ()=>{
    toggle.current = !toggle.current
    toggle.current ? onoff.current.innerText = "ON" : onoff.current.innerText = "OFF"
  }

  return (
    <div>
      <div ref={onoff}>
         {toggle.current? "ON" : "OFF"}
      </div>
      <button onClick={handleOn}>Toggle</button>
    </div>
  )
}

export default OnOff