import React from 'react'
import { motion } from 'framer-motion'

const TransitionBox = ({ showTransitionBox = true, isToggled, setIsToggled }) => {
  // 动画变体（variants），用于定义动画的初始状态和结束状态
  const variants = {
    initial: { height: '20vh' }, // 初始高度
    animate: { height: '60vh' }, // 动画后的高度
  }

  // 动画完成时的处理函数
  const handleAnimationComplete = () => {
    setIsToggled(false) // 动画完成后自动恢复初始状态
  }

  return (
    <div className="transition-box-wrapper" style={{ display: showTransitionBox ? 'block' : 'none' }}>
      <motion.div
        className="transition-box-up"
        initial="initial" // 初始动画状态
        animate={isToggled ? 'animate' : 'initial'} // 根据isToggled状态切换动画
        variants={variants} // 应用定义的变体
        transition={{
          duration: 0.5,
          ease: 'easeOut',
          delay: 0.9,
        }}
        onAnimationComplete={handleAnimationComplete} // 动画完成时的回调
      ></motion.div>
      <div className="transition-box-down"></div>
    </div>
  )
}

export default TransitionBox
