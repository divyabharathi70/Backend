import { useState } from "react"

const Products = () => {
    const [product,setProduct]  = useState({name:"",price:"",quantity:""})
    const [allProduct,setAllProduct]  = useState([{name:"Watch",price:"7000",quantity:"23"}])
    const [editId,setEditId] = useState(null)

    const handleChange = (e)=>{
        setProduct({...product,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setAllProduct([...allProduct,product])
        setProduct({name:"",price:"",quantity:""})
    }

    const updateTrigger = (element,id)=>{
        setEditId(id)
        setProduct(element)
    }

    const handleUpdate = (e)=>{
        e.preventDefault()
        setAllProduct(allProduct.map((e,i)=>i+1==editId ? product : e))
        setProduct({name:"",price:"",quantity:""})
        setEditId(null)
    }

  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input name="name" placeholder='Enter Product Name' value={product.name} onChange={(e)=>handleChange(e)}/>
            <input name="price" placeholder='Enter Price' value={product.price} onChange={(e)=>handleChange(e)}/>
            <input name="quantity" placeholder='Enter Product quantity' value={product.quantity} onChange={(e)=>handleChange(e)}/>
            {editId ? <button onClick={handleUpdate}>Update</button> : <button type="submit">Submit</button>}
        </form>
        <div>
            {allProduct.map((e,i)=>(
                <div key={i+1}>
                     <h2>{e.name}</h2>
                    <h2>{e.price}</h2>
                    <h2>{e.quantity}</h2>
                    <button onClick={()=>updateTrigger(e,i+1)}>Update</button>
                </div>  
            ))}
        </div>
    </div>
  )
}

export default Products