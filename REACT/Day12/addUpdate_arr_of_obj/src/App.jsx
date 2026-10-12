import { useState } from 'react'

const App = () => {
  const [products,setProducts] = useState([{name:"titan",price:2100},{name:"fasttrack",price:5000},{name:"titan",price:21000}])
  const handleAdd = ()=>{

    // push add

    const copy = [...products]
    copy.push({name : "Sonata",price: 3300})
    setProducts(copy)

    //spread add
    
    // const copy = [...products,{name:"MOL",price:2100}]
    // setProducts(copy)

    // setProducts((prev)=>[...prev],{name:"sonata",price:3300})
  }

  const handleUpdate=()=>{
    let copy = [...products]
  }
  return (
    <div>
      {products.map((e,i)=>(
        <div key={i+1}>
            <h3>{e.name}</h3>
            <h3>{e.price}</h3>
            <button onClick={handleUpdate}>Update Product</button>
            <button onClick={handleAdd}>Add Product</button>
        </div>
      ))}
    </div>
  )
}

export default App