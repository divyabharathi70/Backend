import Emp from './components/Emp'
import Expense from './components/Expense'
import Products from './components/Products'
const App = () => {
  return (
    <div>
      <h2>Task 1 - Employee Form: Create name, department and salary fields. Add, show, edit and delete employees.</h2>
      <Emp/>
      <h2>Task 2 - Product Form: Create product name, price and quantity. Update the selected product</h2>
      <Products/>
      <h2>Task 3 - Expense Form: Create title, amount and category fields. Edit or delete an expense.</h2>
      <Expense/>

    </div>
  )
}

export default App