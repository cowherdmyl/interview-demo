import React from 'react'
import myVideo from '../../assets/intro.mp4'

function App() {
  return (
    <div className="App">
      <video autoPlay muted loop preload="auto">
        <source src={myVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  )
}

export default App
