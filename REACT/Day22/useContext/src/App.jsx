import { useContext } from 'react'
import DataContext from './context/DataContext'
import BackGroundColor_useRefState from './classTaskChallenge/BackGroundColor_useRefState'

const App = () => {
  
  const {count,handleCount} = useContext(DataContext)
  return (
    <div>
      <h2>Class Challenge - change Colour (useRef,State)</h2>
      <BackGroundColor_useRefState/>
      <h3>{count}</h3>
      <button onClick={handleCount}>Increament</button>
    </div>
  )
}

export default App