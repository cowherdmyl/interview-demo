import React from 'react'
import Loading from './components/Loading'
import Menus from './components/Menus'
import './index.scss'

function App() {
  return (
    <div className="app-container">
      <Loading />
      <Menus />
    </div>
  )
}

export default App
