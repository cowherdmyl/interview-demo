import React, { useEffect, useState } from 'react'
import logoWhite from '../../../assets/logo-white.svg'
import { motion } from 'framer-motion'

function Loading() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 模拟加载过程
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 0) // 假设加载过程需要3秒

    return () => clearTimeout(timer)
  }, [])
  // 定义动画变化
  const animation = {
    scale: [1, 1.1, 1.1, 1], // 从原始大小，放大到1.25倍，再回到原始大小
    transition: {
      duration: 1.4, // 动画持续时间
      ease: 'easeOut', // 动画缓动函数
      times: [0, 0.4, 0.6, 1], // 控制动画关键帧的时间点
      repeat: Infinity, // 重复次数，Infinity为无限次
      repeatType: 'loop', // 重复类型
    },
  }
  return (
    <motion.div
      className="loading-wrapper"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0, display: isLoading ? 'flex;' : 'none' }}
      transition={{ duration: 1 }}>
      {isLoading ? (
        <motion.img
          src={logoWhite}
          alt="Heartbeat"
          animate={animation} // 应用动画
          style={{ width: 80, height: 90 }} // 根据需要调整图片大小
        />
      ) : null}
    </motion.div>
  )
}

export default Loading
