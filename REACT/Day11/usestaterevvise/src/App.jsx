import React from 'react'
import EmpSalary from './components/EmployeeSalary'
import CourseUpdate from './components/CourseUpdate'
import ProductUpdate from './components/ProductUpdate'

const App = () => {
  return (
    <div>
      <h1 className='bg-gray-300 text-center text-4xl'>Task 1</h1>
      <EmpSalary/>
      <h1 className='bg-gray-300 text-center text-4xl'>Task 2</h1>
      <CourseUpdate/>
      <h1 className='bg-gray-300 text-center text-4xl'>Task 3</h1>
      <ProductUpdate/>
    </div>
  )
}

export default App
