import { useMemo, useState } from 'react'

const ProductTheme = () => {
    const [number,setNumber] = useState(null)
    const [numbers,setNumbers] = useState(null)
    const [theme,setTheme] = useState(true)

    const doubleNumber = ()=>{
        setNumbers(number)
    }

    //  const fun = ()=>{
    //     return numbers*2
    // }

    // const doubledVal = useMemo(()=>{
    //     const val = fun()
    //     return val
    // },[numbers])

    const doubledVal = useMemo(()=>{
        console.log("Memo Triggered");
        return numbers*2
    },[numbers])

  return (
    <div style={theme ? { backgroundColor: "white" } : { backgroundColor: "black" }}>
        <button onClick={()=>setTheme(!theme)}>{theme ? "Dark" : "Light"}</button>
        <input type="text" onChange={(e)=>setNumber(e.target.value)} />
        <button onClick={doubleNumber}>Check</button>
        <h3>{`${numbers} product is ${doubledVal}`}</h3>
    </div>
  )
}

export default ProductTheme