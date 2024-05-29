import React from 'react'
import VideoPlayer from './VideoPlayer'
import TextScrollAnimation from './TextScrollAnimation'

function FirstScreen({ setPercent }) {
  return (
    <div className="first-screen">
      <VideoPlayer />
      <TextScrollAnimation setPercent={setPercent} />
    </div>
  )
}

export default FirstScreen
