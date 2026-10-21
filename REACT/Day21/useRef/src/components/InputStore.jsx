// import { useRef } from "react"

import { useRef } from "react"

// const InputStore = () => {

//     const data = useRef("")
//     const inp = useRef(null)
//     const show = useRef(null)

//     const saveData = ()=>{
//       data.current = inp.current.value
//       show.current.innerText = data.current
//     }
//   return (
//     <div>
//       <input ref={inp} type="text" onChange={saveData}/>
//       <h3 ref={show}></h3>
//     </div>
//   )
// }

// export default InputStore

//without storing value in useref 
const InputStore = () => {

  const inp = useRef(null)
  const show = useRef(null)

  const saveData = ()=>{
     show.current.innerText = inp.current.value
  }

  return (
     <div>
       <input ref={inp} type="text" onChange={saveData}/>
       <h3 ref={show}></h3>
     </div>
  )
}

export default InputStore