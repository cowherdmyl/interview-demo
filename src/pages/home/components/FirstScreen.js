import React, { useState } from 'react'
import VideoPlayer from './VideoPlayer'
import TextScrollAnimation from './TextScrollAnimation'
import { motion } from 'framer-motion'

function FirstScreen({ setPercent, showFirstScreen = true, handleTopScroll }, ref) {
  const [showText, setShowText] = useState(true)
  return (
    <div ref={ref} className="first-screen" style={{ display: showFirstScreen ? 'block' : 'none' }}>
      <VideoPlayer />
      <TextScrollAnimation setPercent={setPercent} setShowText={setShowText} handleTopScroll={handleTopScroll} />
      {/* 中间底部小滚轮 */}
      <div className="mouse-animation">
        <div className="mouse-wrapper">
          <span className="mouse-wheel"></span>
        </div>
        <span className="mouse-text">scroll down</span>
      </div>
      {/* 左侧底部文案 */}
      <motion.div
        className="left-bottom-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: showText ? 1 : 0 }}
        transition={{ duration: 1 }}>
        <p>
          Feed is an intelligent property rights and payments platform, using intelligent software and digital security
          that goes well beyond 'military-grade' to give users true ownership of their data and IP.
        </p>
        <p>
          Feed facilitates trusted exchanges of users' progressively-perfecting data assets with businesses,
          researchers, and governments in a <b>trusted</b>, audited, and independently verifiable manner; on their own
          terms and conditions.
        </p>
      </motion.div>
    </div>
  )
}

export default React.forwardRef(FirstScreen)
