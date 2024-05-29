import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import basilico from '../../../assets/basilico.png'

function HamburgerMask({ isVisible }) {
  const [show, setShow] = useState(false)
  const TextLines = [
    'INTRODUCING FEED',
    'FEED APP',
    'MEET THE TEAM',
    'SCHEDULE A MEETING',
    'SEE THE LIVE PROTOTYPE',
    <>
      design by <span className="hamburger-mask-name">MenYuLiang</span>
    </>,
  ]
  const handleExit = () => {
    setShow(false)
  }
  useEffect(() => {
    if (isVisible) {
      setShow(true)
    }
  }, [isVisible])
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="hamburger-mask"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} // 动画结束状态：完全不透明
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }} // 持续时间为 1 秒
        >
          <div className="hamburger-mask-text" style={{ display: show ? 'block' : 'none' }}>
            <AnimatePresence onExitComplete={handleExit}>
              {isVisible &&
                TextLines.map((line, index) => (
                  <motion.div
                    className={`${index === TextLines.length - 1 ? 'hamburger-mask-sign' : ''}`}
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}>
                    {line}
                    {index === TextLines.length - 1 && <img src={basilico} alt="" />}
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default HamburgerMask
