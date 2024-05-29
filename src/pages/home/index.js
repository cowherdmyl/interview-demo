import React from 'react'
import Loading from './components/Loading'
import Menus from './components/Menus'
import FirstScreen from './components/FirstScreen'
import './index.scss'

function App() {
  return (
    <div className="app-container">
      <Loading />
      <Menus />
      <FirstScreen />
    </div>
  )
}

export default App
