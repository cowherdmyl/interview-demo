import React from 'react'
import VideoPlayer from './VideoPlayer'
import TextScrollAnimation from './TextScrollAnimation'

function FirstScreen({ setPercent }) {
  return (
    <div className="first-screen">
      <VideoPlayer />
      <TextScrollAnimation setPercent={setPercent} />
      <div className="mouse-animation">
        <div className="mouse-wrapper">
          <span className="mouse-wheel"></span>
        </div>
        <span className="mouse-text">scroll down</span>
      </div>
    </div>
  )
}

export default FirstScreen
