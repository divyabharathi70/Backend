// import { useRef } from "react"

import { useRef } from "react"

 const Counter = () => {

   const count = useRef(0)
   // let count = 0
   const showRef = useRef(null)

   const increaseCount = ()=>{
     // count +=1
     count.current = count.current+1
     showRef.current.innerText = count.current
   }

   return (
     <div>
       <h3 ref={showRef}>{count.current}</h3>
       <button onClick={increaseCount}>Increament</button>
     </div>
   ) 
 }

 export default Counter