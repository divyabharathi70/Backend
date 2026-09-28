// TASK 1 – PRIMITIVE DATA RENDERING
// Create these variables inside App.jsx:
// studentName = "Arun"
// age = 22
// course = "React"
// fees = 15000
// Requirements:
// - Display all values in JSX using { }.
// - Display name inside <h2>.
// - Display age, course and fees inside <p>.

// TASK 2 – ARRAY RENDERING USING MAP
// Create an array:
// skills = ["HTML", "CSS", "JavaScript", "React", "Node"]
// Requirements:
// - Render all skills on the browser.
// - Use map().
// - Display each skill inside <li>.
// - Add key while rendering.

// Create an object:
// student = {
//     name: "Priya",
//     age: 21,
//     course: "MERN Stack",
//     city: "Chennai"
// }
// Requirements:
// - Display the student details.
// - Access each value using object properties.
// - Do not render the complete object directly.

// TASK 4 – ARRAY OF OBJECTS USING MAP
// Create:
// students = [
//     { id: 1, name: "Arun", course: "React" },
//     { id: 2, name: "Priya", course: "Node" },
//     { id: 3, name: "Kumar", course: "MongoDB" }
// ]
// Requirements:
// - Use map().
// - Display every student's name and course.
// - Use id as key.
// - Do not add, update or delete any data.

const RenderingMeths = () => {
    let studentName = "Arun"
    let age = 22
    let course = "React"
    let fees = 15000

    let skills = ["HTML", "CSS", "JavaScript", "React", "Node"]

    let student = {
        name: "Priya",
        age: 21,
        course: "MERN Stack",
        city: "Chennai"
    }

    let students = [
        { id: 1, name: "Arun", course: "React" },
        { id: 2, name: "Priya", course: "Node" },
        { id: 3, name: "Kumar", course: "MongoDB" }
    ]
    
  return (
    <>
        <div>
            <h1>TASK 1</h1>
            <h2>String number rendering</h2>
            <h2>{studentName}</h2>
            <h2>{age}</h2>
            <h2>{course}</h2>
            <h2>{fees}</h2>
        </div>

        
        <div>
            <h1>TASK 2</h1>
            <h2>Array Rendering</h2>
            <ul>
                {skills.map((e,i)=>(
                  <li key={i}>{e}</li>
                ))}
            </ul>
        </div>

        <div>
            <h1>TASK 3</h1>
            <h2>Object Rendering</h2>
            <h3>{student.name}</h3>
            <h3>{student.age}</h3>
            <h3>{student.course}</h3>
            <h3>{student.city}</h3>
        </div>

        <div>
            <h1>TASK 4</h1>
            <h2>Array of Object</h2>
            {students.map((e)=>(
                <div key={e.id}>
                    <li>{e.name}</li>
                    <li>{e.course}</li>
                </div> 
            ))}
        </div>

        <div>
            
        </div>
    </>
    
  )
}

export default RenderingMeths
