import UseRef from './components/UseRef.jsx'
import State from './components/State.jsx'

const App = () => {
  return (
    <div>
      <h2>BackGround Change using State</h2>
      <State/>
      
      <h2>BackGround Change using useRef</h2>
      <UseRef/>
    </div>
  )
}

export default App