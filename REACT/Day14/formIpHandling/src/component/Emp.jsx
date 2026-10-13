import { useState } from 'react'

const Emp = () => {
    const [name,setName] = useState("")
    const [emp,setEmp] = useState([])

    const addEmp =()=>{
        setEmp([...emp,name])
    }

    const handleUpdate =()=>{
        
    }

  return (
    <div>
      <input placeholder = "Enter EmpName" onChange={(e)=>setName(e.target.value)}/>
      <button onClick={addEmp}>Add</button>
      {emp.map((e)=>(
        <div>
            <h3>{e}</h3>
           <button onClick={handleUpdate}>Update Emp</button>
        </div>
        
      ))}
    </div>
  )
}

export default Emp
