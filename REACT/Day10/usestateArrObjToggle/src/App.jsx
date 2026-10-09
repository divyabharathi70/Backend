import { useState } from 'react'

const App = () => {
    const [course,setCourse] = useState(["HTML", "CSS", "JavaScript"])
    const [details,setDetails] = useState({name: "Arun",age: 22,course: "React"})

    const addArrReact =()=>{
        let copy = [...course]
        copy.push("React")
        setCourse(copy)

     // setCourse((p)=>[...p,"react"])
    }

    const arrUpdate =()=> {
        // let copy = [...course]
        // copy.map((e)=>e==="JavaScript"? "Advanced JavaScript": e)
        setCourse((p)=>[...p].map((e)=>e==="JavaScript" ? "Advanced JavaScript": e))
    }

    const addObjCourse = ()=>{
        let copy = {...details}
        copy.name = "React"
        setDetails(copy)
    }

    const addObjCity = ()=>{
        let copy = {...details,city :"Chennai"}
        setDetails(copy)
    }
       
  return (
    <div>
        <div>
            <h1>TASK 1</h1>
            <h2>Array Add,Update </h2>
            {course.map((e)=>(
                <h3>{e}</h3>
            ))}
            <button onClick={addArrReact}>Add React</button>
            <button onClick={arrUpdate}>Update JS</button>
        </div>

        <div>
            <h1>TASK 2</h1>
            <h2>Object Add City</h2>
            <h3>{details.name}</h3>
            <h3>{details.age}</h3>
            <h3>{details.course}</h3>
            <button onClick={addObjCourse}>Update Course</button>
            <button onClick={addObjCity}>Add City</button>
        </div>
    </div>
    
  )
}

export default App
