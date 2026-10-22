import { useState } from "react"
import DataContext from "../context/DataContext"

const Provider = ({children}) =>{

    const [count,setCount] = useState(0)

    const handleCount = ()=>{
        setCount((p)=>p+1)
    }

  return (
    <DataContext.Provider value={{count,handleCount}}>
        {children}
    </DataContext.Provider>
  )
}

export default Provider