import { useState } from "react"

const StudentsDetails = ()=>{
  const [name,setName] = useState("")
  const [student,setstudent] = useState(["divya"])

  const addStudent = () =>{
    let copy = [...student]
    copy.push(name)
    setstudent(copy)
    setName("")
  }

  return(
    <>
      <div>
        <input type="text" name="" id="" placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)}/>
        <div>
          <h2>{name}</h2>
        </div>
        <button onClick={addStudent}>Add Student</button>
        {student.map((e)=>(
          <div>
            <h3>{e}</h3>
          </div>
        ))}
      </div>
    </>
  )
}

export default StudentsDetails