import { useState } from 'react'

const Task = () => {

  const [isOn,setIsOn] = useState(false)
  const [isLike,setisLike] = useState(false)
  const [user, setUser] = useState({name: "Rahul",age: 22,city: "Chennai"});
  const [products, setProducts] = useState([{ id: 1, name: "Laptop", price: 50000, inStock: true },
                                            { id: 2, name: "Phone", price: 20000, inStock: false },
                                            { id: 3, name: "Tablet", price: 15000, inStock: true }
                                          ]);
  const [students, setStudents] = useState([
                                            { id: 1, name: "Ravi", marks: 75, isPassed: true },
                                            { id: 2, name: "Priya", marks: 35, isPassed: false },
                                            { id: 3, name: "Kumar", marks: 90, isPassed: true }
                                            ]);

  const handleswitch =()=>{
    setIsOn(!isOn)
  }

  const handleLike =()=>{
    setisLike(!isLike)
  }

  const handleUserName = ()=>{  
    let copy = {...user,name : "Arjun"}
    setUser(copy)
  }

  const handleUserAge = ()=>{
    let copy = {...user,age : user.age+1}
    console.log(copy);
    setUser(copy)
    }

  const handleUserCity = ()=>{
    let copy = {...user,city:"Bengalore"}
    setUser(copy)
  }

  const toggleStock = (id) => {
  setProducts(products.map((e) =>e.id === id ? { ...e, inStock: !e.inStock } : e  // no copying as map itself returns a new array 
    )
  )
}

  const increaseMark = (id)=>{
    setStudents(students.map((e)=>e.id == id? {...e,marks:e.marks+5} : e))  
  }

  const toggleResult = (id)=>{
    setStudents(students.map((e)=>e.id == id ? {...e,isPassed : !e.isPassed} : e))
  }

  const delstudent = (id)=>{
    setStudents(students.filter((e)=> e.id !== id))
  }

  return (
    <>
      <div>
        <h2>TASK 1</h2>
        <h4>ON OFF Toggle</h4>
        <h1>Button is {isOn? "ON" : "OFF"}</h1>
        <button onClick={handleswitch}>{isOn? "ON" : "OFF"}</button>
      </div>

      <div>
        <h2>TASK 2 - Like Unlike</h2>
        <h3>My Posts</h3>
        <h4>Like the Post</h4>
        <h4>{isLike ? "You Liked the post" : "You unliked the Post"}</h4>
        <button onClick={handleLike}>Like</button>
      </div>

      <div>
        <h2>TASK 3 - User Details(Object)</h2>
        <h5>{user.name}</h5>
        <h5>{user.age}</h5>
        <h5>{user.city}</h5>
        <button onClick={handleUserName}>Change Name</button>
        <button onClick={handleUserAge}>Change Age</button>
        <button onClick={handleUserCity}>Change City</button>
      </div>

      <div>
        <h2>TASK 4 - Product Details(Array of Object)</h2>
        {products.map((e)=>(
          <div key={e.id}>
            <h4>{e.name}</h4>
            <h4>{e.price}</h4>
            <h4>{e.inStock ? "In Stock" : "Out of Stock"}</h4>
            <button onClick={()=>toggleStock(e.id)}>Toggle Stock</button>
          </div>
        ))}
      </div>

      <div>
        <h2>TASK 5 -  Student Management App(Array of Object)</h2>
        <div>
            {students.map((e)=>(
                <div key = {e.id}>
                     <h3>Name :{e.name}</h3>
                    <h3>Marks : {e.marks}</h3>
                    <h3>{e.isPassed ? "Passed" : "Fail"}</h3>
                    <button onClick={()=>increaseMark(e.id)}>Increase Mark</button>
                    <button onClick={()=>toggleResult(e.id)}>Toggle Result</button>
                    <button onClick={()=>delstudent(e.id)}>Delete Student</button>
                </div>
            ))}
        </div>
      </div>
    </>
    
  )
}

export default Task