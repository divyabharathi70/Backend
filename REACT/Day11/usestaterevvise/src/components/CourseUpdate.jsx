import { useState } from "react"

const CourseUpdate = () => {

    const [course, setCourse] = useState(["HTML", "CSS", "JavaScript"])

    const addReact = () => {

        let update = [...course]

        update.push("React")

        setCourse(update)

    }

    const updateCss = () => {

        let upadted = [...course]

        upadted[1] = "Advanced CSS"

        setCourse(upadted)

    }

    return (

        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">

            <div className="p-5 text-center">
                {course.map((e) => (

                    <h3 className="text-lg font-semibold mb-2">{e}</h3>

                ))}
            </div>

            <div>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-3"
                    onClick={addReact}
                >
                    Change Course
                </button>

                <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={updateCss}
                >
                    Update CSS
                </button>
            </div>

        </div>

    )
}

export default CourseUpdate