
import { useState } from 'react'

const App = () => {
  const [empDetails, setEmpDetails] = useState([])
  const [editId, setEditId] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    let newObj = {
      id: editId !== null ? editId : Date.now(),
      name: e.target.name.value,
      dept: e.target.dept.value,
      salary: e.target.salary.value
    }

    if (editId !== null) {
      let copy = empDetails.map((emp) =>
        emp.id === editId ? newObj : emp
      )
      setEmpDetails(copy)
      setEditId(null)
    } else {
      let copy = [...empDetails, newObj]
      setEmpDetails(copy)
    }

    e.target.reset()
  }

  const handleEdit = (emp) => {
    setEditId(emp.id)

    document.getElementsByName("name")[0].value = emp.name
    document.getElementsByName("dept")[0].value = emp.dept
    document.getElementsByName("salary")[0].value = emp.salary
  }

  const handleDelete = (id) => {
    let copy = empDetails.filter((emp) => emp.id !== id)
    setEmpDetails(copy)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Employee Name"
          required
        />

        <input
          type="text"
          name="dept"
          placeholder="Enter Employee Department"
          required
        />

        <input
          type="number"
          name="salary"
          placeholder="Enter Employee Salary"
          required
        />

        <input
          type="submit"
          value={editId !== null ? "Update Employee" : "Add Employee"}
        />
      </form>

      <table border="1">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {empDetails.map((emp, index) => (
            <tr key={emp.id}>
              <td>{index + 1}</td>
              <td>{emp.name}</td>
              <td>{emp.dept}</td>
              <td>{emp.salary}</td>
              <td>
                <button type="button" onClick={() => handleEdit(emp)}>
                  Edit
                </button>

                <button
                  type="button"
                  onClick={() => handleDelete(emp.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App