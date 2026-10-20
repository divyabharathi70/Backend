import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const [user,setUser] = useState({email:"",password:""})

    const handleChange = (e)=>{
      setUser({...user,[e.target.name] : e.target.value})
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      let data = JSON.parse(localStorage.getItem("record")) || []
      let match = data.find((e)=>e.email == user.email && e.password == user.password)
      if(!match){
          alert("Not Register")
          return
      }
      localStorage.setItem("isActive",JSON.stringify(match))
      navigate("/home")
    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder='Enter Email' value={user.email} onChange={(e)=>handleChange(e)}/>
            <input type="password" name="password" placeholder='Enter Password' value={user.password} onChange={(e)=>handleChange(e)}/>
            <button type='submit'>Submit</button>
        </form>    </div>
  )
}

export default Login