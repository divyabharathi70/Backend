import { useParams } from "react-router-dom"
import productdatails from "../datas/ProductData"

const ProductListing = () => {

  const {id} = useParams()         // return as string object
  const found = productdatails.find((e)=>e.id==id)

  return (
    <div>
      <h1>{found.name}</h1>
      <h1>{found.price}</h1>
    </div>
  )
}

export default ProductListing
