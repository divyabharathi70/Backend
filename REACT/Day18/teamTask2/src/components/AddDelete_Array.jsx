import { useState } from "react"

const AddDelete_Array = () =>{
  const [data,setData] = useState("")
  const [users,setUsers] = useState(["divya","diya"])

  const  getData = (e)=>{
    setData(e.target.value)
  }

  const addData =()=>{
     setUsers([...users,data])
  }

  const handleDelete = (id)=>{
    setUsers(users.filter((e,i)=> i+1 !== id))
  }
  
   return(
    <>
      <input type="text" onChange={(e)=>getData(e)} />
      <button onClick={addData}>Add</button>
      {users.map((e,i)=>(
         <div key={i+1}>
                <h2>{e}</h2>
                <button onClick={()=>handleDelete(i+1)}>Delete</button>
         </div>
      ))}
    </>
   )
}

export default AddDelete_Array