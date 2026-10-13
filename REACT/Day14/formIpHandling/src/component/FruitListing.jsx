import { useState } from 'react'

const FruitListing = () => {

    const [readFruit,setReadFruit] = useState("")
    const [fruit,setFruit] = useState(["Mango","Apple","Orange"])
    const [editId,setEditId] = useState(null)

    const addFruit =()=>{
        setFruit((p) => [...p, readFruit])
        setReadFruit("")
    }

    const updateTrigger =(element,id)=>{
        setEditId(id)
        setReadFruit(element)
    }

    const updateFruit =()=> {
        let copy = [...fruit]
        setFruit(copy.map((e,i)=>i==editId? readFruit : e))
    }

  return (
    <div>
        <input onChange={(e)=>setReadFruit(e.target.value)} value={readFruit}/>
        {editId !==null ? <button onClick={()=>updateFruit(editId)}>Save</button> : <button onClick={addFruit}>Add Fruit</button>}
        
        {fruit.map((e,i)=>(
        <div key = {i}>
            <h4>{e}</h4>
            <button onClick={()=>updateTrigger(e,i)}>Update Fruit</button>
        </div>
      ))}
    </div>
  )
}

export default FruitListing
