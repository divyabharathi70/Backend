const Home = () => {
    let Services = [
    { id: 1, name: "Web Development", description: "Build responsive websites", price: 15000 },
    { id: 2, name: "UI/UX Design", description: "Design user-friendly interfaces", price: 8000 },
    { id: 3, name: "Digital Marketing", description: "Promote businesses online", price: 10000 }
]
    return (
        <div className="bg-gray-300 h-150 flex gap-6 justify-center items-center border-1 p-6">
            {Services.map((e) => (
                <div key={e.id} className="bg-white w-64 p-6 rounded-xl shadow-lg hover:shadow-2xl">
                    <h3 className="text-xl font-bold text-gray-800">{e.name}</h3>
                    <p className="text-gray-500 mt-2">Description : {e.description}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-3">₹{e.price}</p>
                </div>
            ))}

        </div>
    )
}

export default Home