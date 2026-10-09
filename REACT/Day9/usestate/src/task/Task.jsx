import { useState } from 'react'

const Task = () => {
    const [name,setName] =  useState("Arun")
    const [hideshow,setHideShow] = useState(false)
    const [ip,setIp] = useState("")
    const [like,setLike] = useState(1)
    const changeName = () =>{
        setName("Kumar")
    }
    const hideShow = () =>{
        setHideShow(!hideshow)
    }
    const ipfunc = (e)=>{
        setIp(e)
    }
    const addLike =()=>{
        setLike(like+1)
    }
  return (
    <>

            <div className="min-h-screen bg-gray-100 p-6">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">

                {/* TASK 1 */}
                <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg">
                <h2 className="mb-2 text-sm font-bold text-blue-600">TASK 1</h2>
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                    Change the Name
                </h3>

                <h3 className="mb-4 text-lg text-gray-600">{name}</h3>

                <button
                    onClick={changeName}
                    className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
                >
                    Change Name
                </button>
                </div>

                {/* TASK 2 */}
                <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg">
                <h2 className="mb-2 text-sm font-bold text-green-600">TASK 2</h2>
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                    Hide and Show
                </h3>

                <h3 className="mb-4 min-h-7 text-lg text-gray-600">
                    {hideshow ? "Welcome to react" : ""}
                </h3>

                <button
                    onClick={hideShow}
                    className="rounded-lg bg-green-600 px-5 py-2 font-medium text-white transition hover:bg-green-700"
                >
                    Hide/Show
                </button>
                </div>

                {/* TASK 3 */}
                <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg">
                <h2 className="mb-2 text-sm font-bold text-purple-600">TASK 3</h2>
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                    Display Text in Input
                </h3>

                <input
                    placeholder="Enter your Name"
                    onChange={(e) => ipfunc(e.target.value)}
                    className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                />

                <h3 className="text-lg text-gray-600">{ip}</h3>
                </div>

                {/* TASK 4 */}
                <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg">
                <h2 className="mb-2 text-sm font-bold text-pink-600">TASK 4</h2>
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                    Like Button
                </h3>

                <h3 className="mb-4 text-2xl font-bold text-pink-600">{like}</h3>

                <button
                    onClick={addLike}
                    className="rounded-lg bg-pink-600 px-5 py-2 font-medium text-white transition hover:bg-pink-700 active:scale-95"
                >
                    Like
                </button>
                </div>

            </div>
            </div>


    </>
  )
}

export default Task
