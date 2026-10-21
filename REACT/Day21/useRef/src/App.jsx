
import ShowText from './components/ShowText'
import Counter from './components/Counter'
import OnOff from './components/OnOff'
import InputStore from './components/InputStore'
import ScrollIntoView from './components/ScrollIntoView'

const App = () => {
  return (
    <div>
      <ShowText/>
      <Counter/>
      <OnOff/>
      <InputStore/>
      <ScrollIntoView/>
    </div>
  )
}

export default App

// const count = useRef(1)

// const timerStart =()=>{
//   // setInterval(() => {
//   //   count.current.innerText = count.current.innerText+1
//   // }, 1000);
// }

// const App = () => {
//   return (
//     <div>
//       <h2 ref={count}>{count.current.innerText}</h2>
//       <button onClick={timerStart}>Start Timer</button> 
//       {/* <button onClick={timerStop}>Stop Timer</button> */}
//     </div>
//   )
// }

// export default App