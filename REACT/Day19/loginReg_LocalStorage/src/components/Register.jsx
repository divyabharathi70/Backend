import {useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const [user,setUser] = useState({name:"",email:"",password:""})
    const [regUser,setregUser] = useState([])

    useEffect(()=>{
        const getData = ()=>{
            let data = JSON.parse(localStorage.getItem("record")) || []
            setregUser(data)
        }
        getData()
    },[])
    
    const handleChange = (e)=>{
        setUser({...user,[e.target.name] : e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        let obj = {id: Date.now() ,...user}
        let data = [...regUser]
        data.push(obj)
        setregUser(data)
        localStorage.setItem("record",JSON.stringify(data))
        setUser({name:"",email:"",password:""})
        alert ("User Register Successfully")

        setInterval(() => {
            navigate("/login")
        }, 1000);
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder='Enter Name' value={user.name} onChange={(e)=>handleChange(e)}/>
            <input type="text" name="email" placeholder='Enter Email' value={user.email} onChange={(e)=>handleChange(e)}/>
            <input type="password" name="password" placeholder='Enter Password' value={user.password} onChange={(e)=>handleChange(e)}/>
            <button type='submit'>Submit</button>
        </form>

    
    </>
  )
}

export default Register