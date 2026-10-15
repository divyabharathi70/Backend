import { useState } from 'react'

const App = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        localStorage.setItem("user", JSON.stringify(formData))

        console.log("Data saved:", formData)
    }

    return (
        <div className="flex flex-col items-center gap-4 p-5">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border p-2"
                    required
                />

                <input
                    type="number"
                    name="age"
                    placeholder="Enter age"
                    value={formData.age}
                    onChange={handleChange}
                    className="border p-2"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border p-2"
                    required
                />

                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Save Data
                </button>
            </form>
        </div>
    )
}

export default App