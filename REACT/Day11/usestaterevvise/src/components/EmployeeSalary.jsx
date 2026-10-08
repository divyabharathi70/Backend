import { useState } from 'react'

const EmployeeSalary = () => {

    const [salary, setSalary] = useState(25000)

    const handleClick = () => {
        setSalary(salary + 5000)
    }

    return (

        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">

            <div className="bg-white p-8 rounded-lg shadow-md text-center">

                <h3 className="text-xl font-semibold mb-3">
                    Employee Name : Arun
                </h3>

                <h3 className="text-lg font-medium mb-5">
                    Salary: ${salary}
                </h3>

                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handleClick}
                >
                    Increment
                </button>

            </div>

        </div>

    )
}

export default EmployeeSalary