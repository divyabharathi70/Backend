import { useState } from "react"

const StorageNumber = () => {
    const[number,setNumber] = useState(null)
    const[storage,setstorage] = useState([])

    const addNumber = (value)=>{
        setNumber(value)
    }

    const addToArr= ()=>{
        let copy = [...storage]
        copy.push(number)
        setstorage(copy)
        setNumber("")
    }

  return (
    <div>
      <input type="text" placeholder="Enter a Number" onChange={(e)=>addNumber(e.target.value)}/>
      <button onClick={addToArr}>Add and Check Even or Odd</button>
      {storage.map((e)=>(
        e%2==0 ? <h3>The Number is Even</h3> :  <h3>The Number is Odd</h3>
      ))}
    </div>
  )
}

export default StorageNumber
