import { useLocation, useNavigate } from "react-router-dom"
import ProductDatas from "../datas/ProductData"

const Home = () => {
    const navigate = useNavigate()
    let location = useLocation()    

    const moveDetails = (id)=>{
        navigate(`product/${id}`)
    }

  return (
    <div>
        <div>
            <h1>{"Hi " +location.state}</h1>
        </div>
        <div>
            {ProductDatas.map((e)=>(
                <div key={e.id}>
                    <h3>{e.name}</h3>
                    <p>{e.price}</p>
                    {/* <Link to={`product/${e.id}`}>View Details</Link> */}
                    <button onClick={()=>moveDetails(e.id)}>View Details</button>
                </div>
            ))}
    </div>
    </div>
    
  )
}

export default Home