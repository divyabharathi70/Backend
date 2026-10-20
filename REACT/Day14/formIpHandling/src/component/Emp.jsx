import { useState } from 'react'

const Emp = () => {
    const [name,setName] = useState("")
    const [emp,setEmp] = useState([])
    const [editId,seteditId] = useState(null)

    const addEmp =()=>{
        setEmp([...emp,name])
    }

    const handleUpdate =(element,id)=>{
        setName(element)
        seteditId(id)
    }

    const updateEmp = ()=>{
      let copy = [...emp]
      setEmp(copy.map((e,i)=>i+1==editId ? name : e))
    }

  return (
    <div>
      <input placeholder = "Enter EmpName" onChange={(e)=>setName(e.target.value)}/>
      {editId ? <button onClick = {updateEmp}>Update Emp</button> : <button onClick={addEmp}>Add</button>}
      {emp.map((e,i)=>(
        <div key={i+1}>
            <h3>{e}</h3>
           <button onClick={()=>handleUpdate(e,i+1)}>Update Emp</button>
        </div>
      ))}
    </div>
  )
}

export default Emp
