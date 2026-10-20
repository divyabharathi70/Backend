import { useState } from 'react'

const App = () => {
    const [obj,setObj] = useState({name:"",dept:"",salary:""})
    const [emp,setEmp] = useState([])
    const [editId,setEditId] = useState(null)

    const saveObj = (e)=>{
        setObj({...obj,[e.target.name] : e.target.value})
    }

    const handleSubmit= (e)=>{
        e.preventDefault()
        setEmp([...emp,obj])
        setObj({name:"",dept:"",salary:""})
    }

    const updateTrigger = (element,id)=>{
      setObj(element)
      setEditId(id)
    }

    const updateEmp = (e)=>{
      e.preventDefault()              // update buttonis also inside of form so clicking it submit the form too - e.preventDefault()  - without it it push emty obj written in submit function
      const updateData = emp.map((e,i)=>(i+1==editId ? {...e,...obj} : e))
      setEmp(updateData)
      setObj({name:"",dept:"",salary:""})
      setEditId(null)
  }


    const handleDelete = (id)=>{
      let copy = [...emp]
      setEmp(copy.filter((_,i)=>i+1!==id))
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input name='name' placeholder='Enter Name' value={obj.name} onChange={(e)=>saveObj(e)}/>
          <input name='dept' placeholder='Enter dept' value={obj.dept} onChange={(e)=>saveObj(e)}/>
          <input name='salary' placeholder='Enter salary' value={obj.salary} onChange={(e)=>saveObj(e)}/>
          {editId ? <button onClick={updateEmp}>Update</button>: <button type='submit'>Submit</button>}
      </form>

      <table>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Name</th>
            <th>Dept</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((e,i)=>(
            <tr key={i+1}>
                  <th>{i+1}</th>
                  <th>{e.name}</th>
                  <th>{e.dept}</th>
                  <th>{e.salary}</th>
                  <th><button onClick={()=>updateTrigger(e, i+1)}>Update</button></th>
                  <th><button onClick={()=>handleDelete(i+1)}>Delete</button></th>
            </tr>
          )
        )}
        </tbody>
      </table>
    </div>
  )
}

export default App