import React from 'react'
import VideoPlayer from './VideoPlayer'
import TextScrollAnimation from './TextScrollAnimation'

function FirstScreen({ setPercent }) {
  return (
    <div className="first-screen">
      <VideoPlayer />
      <TextScrollAnimation setPercent={setPercent} />
      {/* 中间底部小滚轮 */}
      <div className="mouse-animation">
        <div className="mouse-wrapper">
          <span className="mouse-wheel"></span>
        </div>
        <span className="mouse-text">scroll down</span>
      </div>
      {/* 左侧底部文案 */}
      <div className="left-bottom-text">
        <p>
          Feed is an intelligent property rights and payments platform, using intelligent software and digital security
          that goes well beyond 'military-grade' to give users true ownership of their data and IP.
        </p>
        <p>
          Feed facilitates trusted exchanges of users' progressively-perfecting data assets with businesses,
          researchers, and governments in a <b>trusted</b>, audited, and independently verifiable manner; on their own
          terms and conditions.
        </p>
      </div>
    </div>
  )
}

export default FirstScreen
