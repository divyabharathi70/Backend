import useCounter from './hooks/useCounter'
import useCounterAuguments from './hooks/useCounterAuguments'
import useFetch from './hooks/useFetch'

const App = () => {
  const {count,increament} = useCounter()
  const {countval,increamentfun,decreament,reset} = useCounterAuguments(23,3)
  const {products} = useFetch("https://dummyjson.com/products")
  return (
    <>
      <div>
          <h3>CustomHooks without argument</h3>
          {count}
           <button onClick={increament}>Increament</button>
    </div>

     <div>
          <h3>CustomHooks with argument</h3>
          {countval}
           <button onClick={increamentfun}>Increament</button>
           <button onClick={decreament}>decreament</button>
           <button onClick={reset}>reset</button>
    </div>

    <div>
          <h3>CustomHooks with Fetch</h3>
          {products.map((e)=>(
            <div key = {e.id}>
                <h2>{e.title}</h2>
                <h2>{e.price}</h2>
            </div>
          ))}
    </div>
    </>
    
  )
}

export default App