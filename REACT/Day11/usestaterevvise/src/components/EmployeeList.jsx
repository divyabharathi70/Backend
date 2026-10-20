import React, { useState } from 'react'

const EmployeeList = () => {
    const [emp,setEmp] = useState([{ id: 1, name: "Arun", salary: 25000 },{ id: 2, name: "Priya", salary: 30000 },{ id: 3, name: "Kumar", salary: 28000 }])

    const addEmp = ()=>{
        const add = [...emp]
        add.push({id: 4,name: "Bala",salary: 32000})
        setEmp(add)
    }

    const updateEmp = ()=>{
        const copy = [...emp]
        setEmp(copy.map((e,i)=>i+1==2 ? {...e,salary:35000} : e))
    }

  return (
    <div>
        {emp.map((e)=>(
            <div>
                <h2>{e.name}</h2>
                <h2>{e.salary}</h2>
            </div>
        ))}
        <button onClick={addEmp}>Add Employee</button>
        <button onClick={updateEmp}>Update id :2 Employee's salary</button>

    </div>
  )
}

export default EmployeeList
