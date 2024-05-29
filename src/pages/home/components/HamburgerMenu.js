import React, { useState } from 'react'
import { motion } from 'framer-motion'

const HamburgerMenu = ({ setShowHamburgerMask }) => {
  const [isOpen, setIsOpen] = useState(false)

  // 定义动画变量
  const topVariant = {
    closed: {
      rotate: [90, 45, 0],
      translateY: 0,
      translateX: [0, 12, 0],
      transition: { duration: 0.4, times: [0, 0.5, 1] },
    },
    open: {
      rotate: [0, -20, 35],
      translateY: 10,
      transition: {
        duration: 0.4,
        times: [0, 0.5, 1], // 定义动画关键帧的时间，确保旋转和移动是连续的
      },
    },
  }

  const middleVariant = {
    closed: {
      opacity: [0, 0, 1],
      rotate: [90, 45, 0],
      translateX: [0, 5, 0],
      transition: { duration: 0.4, times: [0, 0.5, 1] },
    },
    open: { opacity: 0, rotate: 90, transition: { duration: 0.01 } },
  }

  const bottomVariant = {
    closed: {
      rotate: 0,
      translateY: 0,
      translateX: [0, -5, 0],
      transition: { duration: 0.4 },
    },
    open: { rotate: 145, translateY: -10, transition: { duration: 0.4 } },
  }

  const handleClick = () => {
    setIsOpen(!isOpen)
    setShowHamburgerMask(!isOpen)
  }

  return (
    <div
      className="hamburger-menu"
      onClick={() => handleClick()}
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <motion.div
        variants={topVariant}
        animate={isOpen ? 'open' : 'closed'}
        style={{ background: 'white', height: '4px', width: '100%', marginBottom: '6px' }}
      />
      <motion.div
        variants={middleVariant}
        animate={isOpen ? 'open' : 'closed'}
        style={{ background: 'white', height: '4px', width: '100%', marginBottom: '6px' }}
      />
      <motion.div
        variants={bottomVariant}
        animate={isOpen ? 'open' : 'closed'}
        style={{ background: 'white', height: '4px', width: '100%' }}
      />
    </div>
  )
}

export default HamburgerMenu
