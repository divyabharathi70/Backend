import { useState } from 'react'

const useCounterAuguments = (ini,step) => {
    const [countval,setCount] = useState(ini)

    const increamentfun = ()=>{
        setCount(countval+step)
    }

    const decreament = ()=>{
        setCount(countval-step)
    }

    const reset = ()=>{
        setCount(ini)
    }
  return{countval,increamentfun,decreament,reset}
}

export default useCounterAuguments