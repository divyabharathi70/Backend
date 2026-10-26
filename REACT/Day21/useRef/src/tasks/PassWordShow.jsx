import  { useRef } from 'react'

const PassWordShow = () => {
    const password = ""
    const toggle = useRef(true)
    const passwordRef = useRef("")

    const savePassword = (e)=>{
      password = e.target.value
    }

    const toggleFunc = ()=>{
      toggle.current ? passwordRef.current.value = ""  : passwordRef.current.value = password
    }

  return (
    <div>
        <input type="text"  placeholder='Enter Password' ref={passwordRef} onChange={(e)=>savePassword(e)}/>
        <button onClick={toggleFunc}>{toggle.current ? "Show" : "Hide"}</button>
        <button>Change Input Type</button>
    </div>
  )
}

export default PassWordShow