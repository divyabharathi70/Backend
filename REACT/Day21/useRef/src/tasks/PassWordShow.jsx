import  { useRef } from 'react'

const PassWordShow = () => {
    const toggle = useRef(true)
    const passwordRef = useRef("")



  return (
    <div>
        <input type="text"  placeholder='Enter Password' ref={passwordRef}/>
        <button onClick={toggleFunc}>Show</button>
        <button onClick={toggleFunc}>Hide</button>
        <button>Change Input Type</button>
    </div>
  )
}

export default PassWordShow