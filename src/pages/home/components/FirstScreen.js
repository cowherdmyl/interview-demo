import React from 'react'
import VideoPlayer from './VideoPlayer'
import TextScrollAnimation from './TextScrollAnimation'

function FirstScreen() {
  return (
    <div className="first-screen">
      <VideoPlayer />
      <TextScrollAnimation start />
    </div>
  )
}

export default FirstScreen
