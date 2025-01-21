import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FoodMenu from './FoodCatalog/FoodMenu'
import './App.css'

function App() {


  return (
    <div className='App'>
    
      <div className='header'>
      <img src="/awning.png" alt="Logo" />
        <h1>Food Truck Favorites</h1>
      </div>
      <FoodMenu/>
    </div>
  )
}

export default App;
