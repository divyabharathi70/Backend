import{ useEffect, useState } from 'react'

const useFetch = (url) => {
    const [products,setProducts] = useState([])
  
    useEffect(()=>{
        const getData = async()=>{
        try{
            const fetchData = await fetch(url)
            const dataParse = await fetchData.json()
            setProducts(dataParse.products)
        }
        catch(error){
            console.log(error.message);
        }
    }
    getData()
    },[])
    
  return {products}
}

export default useFetch