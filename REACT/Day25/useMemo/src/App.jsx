import ProductTheme from './components/tasks/ProductTheme'
import SearchCounter from './components/tasks/SearchCounter'

const App = () => {
  return (
    <>
    <h2>Task 1 - Double the Number + Theme Change</h2>
      <ProductTheme/>
    <h2>Task 2 - Array Product Search + Counter</h2>
      <SearchCounter/>
    </>
  )
}

export default App