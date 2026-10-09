const App = () => {

  let value = 25
  const handleClick =()=>{
    value++
    console.log(value);
    
  }

  return (
    <div>
      <h2>{value}</h2>
      <button onClick = {handleClick}>Increament</button>
    </div>
  )
}

export default App
// lexical + closure
// scr ar r = ori change 