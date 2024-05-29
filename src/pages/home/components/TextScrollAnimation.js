import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const ScrollAnimationExample = () => {
  const containerRef = useRef(null)
  const [elements, setElements] = useState([])

  // 初始化子元素的状态
  useEffect(() => {
    const textList = [
      'When you want something,',
      'all the universe conspires',
      'in helping you to achieve it.',
      'Paulo Coelho',
      '',
      'Feed is that conspiracy:',
      'the conspiracy of trust.',
      '',
      'Trust is the single',
      'most important ingredient',
      'missing from digital relationships.',
      '',
      'Boston Consulting Group',
      'and the World Economic Forum',
      'forecast the digital economy',
      'to be worth between',
      '1.5 and 2.5 trillion dollars',
      'by 2016.',
      '',
      'The difference',
      'between those numbers',
      'is trust.',
      '',
      'Feed is a digital mechanism of trust',
    ]
    const initialElements = textList.map((item, index) => ({
      id: item,
      index,
      scale: 1,
      opacity: 1,
    }))
    setElements(initialElements)
  }, [])

  // 监听容器内部的滚动事件并更新子元素的状态
  useEffect(() => {
    const container = containerRef.current
    const handleScroll = () => {
      if (container) {
        const containerCenter = container.scrollTop + container.clientHeight / 2

        const updatedElements = elements.map(element => {
          const elementRef = document.getElementById(`element-${element.id}`)
          if (elementRef) {
            const elementTop = elementRef.offsetTop
            const elementCenter = elementTop + elementRef.clientHeight / 2
            const distanceToCenter = Math.abs(elementCenter - containerCenter)
            let scale
            if (elementCenter - containerCenter >= 0) {
              scale = Math.max(1 - distanceToCenter / container.clientHeight, 0.5)
            } else {
              scale = 1 + distanceToCenter / container.clientHeight
            }
            const opacity = Math.max(1 - distanceToCenter / (container.clientHeight / 2), 0.1)

            return { ...element, scale, opacity }
          }
          return element
        })

        setElements(updatedElements)
      }
    }

    container.addEventListener('scroll', handleScroll)

    return () => container.removeEventListener('scroll', handleScroll)
  }, [elements])

  return (
    <div ref={containerRef} className="text-scroll-wrapper">
      {elements.map(element => (
        <motion.div
          className="text-scroll-item"
          style={{ marginTop: element.index === 0 ? 300 : 0 }}
          key={element.index}
          id={`element-${element.id}`}
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: element.scale, opacity: element.opacity }}
          transition={{ duration: 0.5 }}>
          {element.id}
        </motion.div>
      ))}
    </div>
  )
}

export default ScrollAnimationExample
