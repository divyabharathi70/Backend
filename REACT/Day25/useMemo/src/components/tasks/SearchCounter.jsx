import { useMemo, useState } from 'react'

const SearchCounter = () => {
    const [search,setSearch] = useState("")
    const [count,setCount] = useState(0)
    const products = [{id:21,name : "Watch", price : 13000},{id:21,name : "Bracelet", price : 13000},{id:21,name : "Earings", price : 13000}]

    let filtered = [...products]
    // filtered = filtered.filter((e)=>e.name.toLowerCase().includes(search.toLowerCase()))

    filtered = useMemo(()=>{
            console.log("Memo Triggered");
            
            filtered = filtered.filter((e)=>e.name.toLowerCase().includes(search.toLowerCase()))
            return filtered
    },[search])

  return (
    <div>
        <h2>{count? count : "Click count"}</h2>
        <button onClick={()=>setCount(count+1)}>Count</button>
        <br />
        <input type="text" onChange={(e)=>setSearch(e.target.value)}/>
        {filtered.map((e)=>(
            <div>
                <h2>{e.name}</h2>
                <h3>{e.price}</h3>
            </div>
        ))}
    </div>
  )
}

export default SearchCounter