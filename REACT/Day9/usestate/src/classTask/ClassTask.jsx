import { useState } from "react"

// const ClassTask = () => {

//   let value = 25
//   const handleClick =()=>{
//     value++
//     console.log(value);
    
//   }

//   return (
//     <div>
//       <h2>{value}</h2>
//       <button onClick = {handleClick}>Increament</button>
//     </div>
//   )
// }

// export default ClassTask


const ClassTask = () => {
  let [count,setCount] = useState(0)
  const handleClick = () =>{
    setCount(count++)
  }
  return (
      <div className="flex  flex-col items-center justify-center bg-gray-100">
      <div className="rounded-xl bg-white p-8 text-center shadow-lg">
        <h2 className="mb-6 text-4xl font-bold text-blue-600">{count}</h2>

        <button
          onClick={handleClick}
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
        >
          Click
        </button>
      </div>
    </div>
  )
}

export default ClassTask



// lexical + closure
// scr arr = ori change, 