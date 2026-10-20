import React, { useState } from 'react'

const Expense = () => {
    const [obj,setObj] = useState({title:"",amount:"",category:""})
    const [tracker,setTracker] = useState([{title:"PG Rent",amount:"10000",category:"Rent"}])
    const [editId,setEditId] = useState(null)

    const saveObj = (e)=>{
        setObj({...obj,[e.target.name] : e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setTracker([...tracker,obj])
        setObj({title:"",amount:"",category:""})
    }

    const updateTrigger = (element,id)=>{
        setEditId(id)
        setObj(element)
    }


    const updateEmp = (e)=>{
        e.preventDefault()
        setTracker(tracker.map((e,i)=>i+1 == editId ? obj : e))
        setObj({title:"",amount:"",category:""})
        setEditId(null)
    }

    const handleDel = (id)=>{
        setTracker(tracker.filter((_,i)=> i+1!==id))
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input name='title' placeholder='Enter Title' value={obj.title} onChange={(e)=>saveObj(e)}/>
          <input name='amount' placeholder='Enter Amount' value={obj.amount} onChange={(e)=>saveObj(e)}/>
          <input name='category' placeholder='Enter Category' value={obj.category} onChange={(e)=>saveObj(e)}/>
          {editId ? <button onClick={updateEmp}>Update</button>: <button type='submit'>Submit</button>}
      </form>

      <div>
            {tracker.map((e,i)=>(
                <div key={i+1}>
                    <h3>{e.title}</h3>
                    <h3>{e.amount}</h3>
                    <h3>{e.category}</h3>
                <button onClick={()=>updateTrigger(e,i+1)}>Update</button>
                <button onClick={()=>handleDel(i+1)}>Delete</button>
                </div>
            ))}
      </div>
    </div>
  )
}

export default Expense