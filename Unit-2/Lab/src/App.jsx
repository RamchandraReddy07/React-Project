import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const updateCount = () => setCount(count+multiplier);
  const [multiplier, setMultiplier] = useState(1);
  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count-10);
    }
  }

  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count-100);
    }
  };

  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 10);
      setCount(count-1000);
    }
  };

  return (
    
      <div className="App">
        <div className="header">
          <h1>Samosa Selector</h1>
          <h2>Count: {count}</h2>
          <img className='samosa' src="https://helpful-griffin-0a0ba5.netlify.app/samosa.png" onClick={updateCount}/>
        </div>

        <div className='container'>
          <div className='upgrade'>
            <h3>Double Stuffed 👯‍♀️</h3>
            <p>2x per click</p>
            <button className='clickBtn' onClick={buyDoubleStuffed}>10 samosas</button>
          </div>

          <div className='upgrade'>
            <h3>Party Pack 🎉</h3>
            <p>5x per click</p>
            <button className='clickBtn' onClick={buyPartyPack}>100 samosas</button>
          </div>
          <div className='upgrade'>
            <h3>Full Feast 👩🏽‍🍳</h3>
            <p>10x per click</p>
            <button className='clickBtn' onClick={buyFullFeast}>1000 samosas</button>
          </div>
        </div>
       </div>
   
  )
}

export default App
