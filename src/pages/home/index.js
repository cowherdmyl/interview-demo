import React from 'react'
import VideoPlayer from './components/VideoPlayer'
import Loading from './components/Loading'
import './index.scss'

function App() {
  return (
    <div className="App">
      <Loading />
      <VideoPlayer />
    </div>
  )
}

export default App
