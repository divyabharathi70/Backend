import { useEffect, useState } from 'react'

const LocalStorage = () => {
    const [user,setUser] = useState({name:"",email:"",age:""})
    const [userDetails,setUserDetails] = useState([])
    const [editId,setEditId] = useState(null)

    useEffect(()=>{
         const getData = ()=>{
            let data = JSON.parse(localStorage.getItem("userDetails")) || []
            setUserDetails(data)
        }
        getData()
    },[])
   

    const handleChange = (e)=>{
        setUser({...user,[e.target.name] : e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        // let data = JSON.parse(localStorage.getItem("userDetails")) || []
        let data = [...userDetails]
        data.push(user)
        localStorage.setItem("userDetails",JSON.stringify(data))
        setUserDetails(data)
        setUser({name:"",email:"",age:""})
    }

    const updateTrigger = (element,id)=>{
        setEditId(id)
        setUser(element)
    }

    const updateUser = (e)=>{
        e.preventDefault()
        // let data = JSON.parse(localStorage.getItem("userDetails"))
        const updates = userDetails.map((e,i)=>i+1==editId ? user : e)
        localStorage.setItem("userDetails",JSON.stringify(updates))
        setUserDetails(updates)
        setUser({name:"",email:"",age:""})
        setEditId(null)
    }

    const deleteUser = (id)=>{
        // let data = JSON.parse(localStorage.getItem("userDetails"))
        let data = [...userDetails]
        let filtered = data.filter((_,i)=>i+1!==id)
        localStorage.setItem("userDetails",JSON.stringify(filtered))
        setUserDetails(filtered)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder='Enter Name'value={user.name} onChange={(e)=>handleChange(e)}/>
            <input type="text" name="email" placeholder='Enter Email'value={user.email} onChange={(e)=>handleChange(e)}/>
            <input type="number" name="age" placeholder='Enter age'value={user.age} onChange={(e)=>handleChange(e)}/>
            {editId ? <button onClick={updateUser}>Update</button> : <button type='submit'>Submit</button>}
        </form>
        
        {userDetails.length ==0 ? "No Users Found ..." : 
        <table>
            <thead>
                <tr>
                    <th>S.NO</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {userDetails.map((e,i)=>(
                    <tr key={i+1}>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.age}</td>
                        <td><button onClick={()=>updateTrigger(e,i+1)}>Update</button></td>
                        <td><button onClick={()=>deleteUser(i+1)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        }
    </div>
  )
}

export default LocalStorage