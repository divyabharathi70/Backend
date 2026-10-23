import { useContext } from "react"
import DataContext from "./context/DataContext"

const App = () => { 
  const {toggle,setToggle} = useContext(DataContext)
  return (
    <div  style={toggle ? {backgroundColor : "red"} : {backgroundColor : "black" , color : "white"}}>
      <h3>Hii</h3>
      <button onClick={()=>setToggle(!toggle)}>Toggle Theme</button>
    </div>
  )
}

export default App