import { useState } from 'react'

const App = () => {
  const [obj,setObj] = useState({name:"",dept:"",salary:""}) //when populating values are needed in ip
  const [empDetails, setEmpDetails] = useState([])
   const [editId,setEditId] = useState(null)

const saveobj = (e)=>{
   let newData = {...obj,[e.target.name] : e.target.value}
   setObj(newData)
}
  const handleSubmit = (e)=>{
      e.preventDefault()
      let copy = [...empDetails,obj]
      setEmpDetails(copy)
      setObj({name:"",dept:"",salary:""})
  }

  const handleDel =(id)=>{
     setEmpDetails(empDetails.filter((_,i)=>i+1!==id))
  }

  const enableEdit = (e,id)=>{
    console.log({e,id});
     setEditId(id)
     setObj(e)
  }
   
  const handleUpdate = ()=>{
    const updateData = empDetails.map((e,i)=>(i+1==editId ? {...e,...obj} : e))
    setEmpDetails(updateData)
    setObj({name:"",dept:"",salary:""})
  }

  return (
    <div>
      <form action="" onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" name="name" onChange = {(e)=>saveobj(e)} value={obj.name} placeholder='Enter Employee Name'/>
        <input type="text" name="dept" onChange = {(e)=>saveobj(e)} value={obj.dept} placeholder='Enter Employee dept'/>
        <input type="number" name="salary" onChange = {(e)=>saveobj(e)} value={obj.salary} placeholder='Enter Employee Salary'/>
        {editId? <button onClick={handleUpdate}>Update</button>:<input type="submit" placeholder = "Submit"/>}
      </form>

      <table>
         <thead>
          <tr>
              <th>S.NO</th>
              <th>Name</th>
              <th>Department</th>
              <th>Salary</th>
          </tr>
              
         </thead>
         <tbody>
             {empDetails.map((e,i)=>(
              <tr key = {i+1}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.dept}</td>
                <td>{e.salary}</td>
                <td><button onClick={()=>enableEdit(e,i+1)}>Edit</button></td>
                <td><button onClick={()=>handleDel(i+1)}>Delete</button></td>
              </tr>
             ))}
         </tbody>
      </table>

    </div>
  )
}

export default App
