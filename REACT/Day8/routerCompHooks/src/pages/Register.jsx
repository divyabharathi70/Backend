import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const [name,setName] = useState(null)
  let navidate = useNavigate()

  let moveData=()=>{
    navidate("/",{state: name})
  }

  return (
    <div>
        <h2>Register :</h2>
        <input type="text" placeholder = "Enter Name"name="" id="" onChange={(e)=>setName(e.target.value)}/>
        <input type="text" name="" placeholder = "Enter Password"id="" />
        <button onClick={()=>moveData()}>Enter</button>
    </div>
  )
}

export default Register
