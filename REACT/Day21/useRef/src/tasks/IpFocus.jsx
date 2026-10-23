import { useRef } from "react"


const IpFocus = () => {
    const nameRef = useRef("")
    const emailRef = useRef("")
    const displayRef = useRef("")


    const handleSubmit = ()=>{
        alert("Name"+nameRef.current.value +"\nEmail"+emailRef.current.value)
        displayRef.current.innerText = "Name"+nameRef.current.value +"\nEmail"+emailRef.current.value
    }

    const focusName = ()=>{
        nameRef.current.focus()
    }

    const focusEmail = ()=>{
        emailRef.current.focus()
    }

    const clearAll = ()=>{
        nameRef.current.value = ""
        emailRef.current.value = ""
    }

  return (
    <div>
        <input type="text" ref = {nameRef} placeholder='Enter Name'/>
        <input type="email" ref={emailRef} placeholder='Enter Name'/>
        <h3 ref={displayRef}></h3>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={focusName}>Focus Name</button>
        <button onClick={focusEmail}>Focus Email</button>
        <button onClick={clearAll}>Clear</button>
    </div>
  )
}

export default IpFocus