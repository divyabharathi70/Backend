
const Home = () => {
    let productDetails = [
        {id : 12,brand : "Titan", colour : "Black" , price : 3000},
        {d : 122,brand : "Fasttrack", colour : "Gold" , price : 2000},
        {d : 95,brand : "Titan", colour : "Silver" , price : 10000}
    ]
  return (
      <div className='bg-gray-300 h-150 flex gap-4 justify-center items-center border-1'>
         {productDetails.map((e)=>(
            <div>
                <h3>{e.brand}</h3>
                <p>{e.colour}</p>
                <p>{e.price}</p>
            </div>
         ))}
     </div>
  )
}

export default Home

