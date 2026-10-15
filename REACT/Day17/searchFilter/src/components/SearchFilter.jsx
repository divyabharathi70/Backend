import { useEffect, useState } from 'react'

const SearchFilter = () => {
    const [datas,setDatas] = useState([])
    const [search,setSearch] = useState("")
    const [city,setCity] = useState("")

    useEffect(()=>{
        const getData = async()=>{
            const details = await fetch("https://dummyjson.com/users")
            let datas = await details.json()            
            setDatas(datas.users)          
        }
        getData()
    },[])

    const handleSearch = (e)=>{
        setSearch(e.target.value)
    }

     const handleCitySort = (e)=>{
        setCity(e.target.value)
    }

    let filtered = [...datas]

    if(search){
        filtered = filtered.filter((e)=>e.firstName.toLowerCase().includes(search.toLowerCase()))
    }
   
    if(city){
        filtered = filtered.filter((e)=>e.address.city == city)
    }
    
    let citydata = datas.map((e)=>e.address.city)
    // let removeDup = new Set(citydata)     -> gives string
    let removeDup = [...new Set(citydata)]
    

  return (
    <div>
        <input type="text" placeholder='search..' onChange={handleSearch}/>
        <select value={city} onChange={handleCitySort}>
            <option value="Select City" >Select City ...</option>
            {removeDup.map((e)=>(
                <option value={e}>{e}</option>
            ))}
        </select>
        <div>
            {filtered.map((e)=>(
                <div>
                    <h2>{e.firstName}</h2>
                    <h2>{e.age}</h2>
                    <h2>{e.address.city}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SearchFilter