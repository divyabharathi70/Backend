import React, { useState } from 'react'

const CourseManagement = () => {
    const [courseName,setCourseName] = useState("")
    const [course,setCourse] = useState(["NodeJS"])

    const addCourse = ()=>{
        let copy = [...course]
        copy.push(courseName)
        setCourse(copy)
        setCourseName("")
    }

    const delCourse =(element)=>{
        setCourse(course.filter((e)=>e !==element))
    }

  return (

    <div>
      <input type="text" placeholder='Enter Course to Add' onChange={(e)=>setCourseName(e.target.value)}/>
      <button onClick={addCourse}>Add Course</button>
      <div>
        {course.map((e,i)=>(
           <div>
                <h4>{e}</h4>
                <button onClick={()=>delCourse(e)}>Delete Course</button>
           </div>
        
         ))}
      </div>
       
    </div>
  )
}

export default CourseManagement
