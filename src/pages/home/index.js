import React, { useState } from 'react'
import Loading from './components/Loading'
import Menus from './components/Menus'
import FirstScreen from './components/FirstScreen'
import './index.scss'

function App() {
  const [percent, setPercent] = useState(0)
  return (
    <div className="app-container">
      <Loading />
      <Menus percent={percent} />
      <FirstScreen setPercent={setPercent} />
    </div>
  )
}

export default App
