import { useState } from 'react'
import reactLogo from './assets/react.svg'
import GameBoard from "./components/GameBoard.jsx"
import viteLogo from '/vite.svg'
import bobIsBob from './assets/bob_is_bob.png'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [play, setPlay] = useState(false)


  return (
    <>
      <div>
      <img src={bobIsBob} className="logo" alt="Vite logo" />

        <a href="https://vitejs.dev" target="_blank">
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
        </a>
        {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Assadodo</h1>
      <h2>TAMAR IS THE BEST</h2>
      <div className="card">
        <button onClick={ () => {
          // setCount( ( count ) => count + 1 );
          setPlay( !play )
        } }>
         Click to start
        </button>
     
      </div>

    {play &&  <GameBoard />}
    
    </>
  )
}

export default App
