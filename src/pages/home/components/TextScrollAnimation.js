import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const ScrollAnimationExample = ({ setPercent, setShowText }) => {
  const containerRef = useRef(null)
  const textList = [
    'When you want something,',
    'all the universe conspires',
    'in helping you to achieve it.',
    'Paulo Coelho',
    '',
    '',
    'Feed is that conspiracy:',
    'the conspiracy of trust.',
    '',
    '',
    'Trust is the single',
    'most important ingredient',
    'missing from digital relationships.',
    '',
    '',
    'Boston Consulting Group',
    'and the World Economic Forum',
    'forecast the digital economy',
    'to be worth between',
    '1.5 and 2.5 trillion dollars',
    'by 2016.',
    '',
    '',
    'The difference',
    'between those numbers',
    'is trust.',
    '',
    '',
    'Feed is a digital mechanism of trust',
  ]

  // 计算并应用动画效果
  const applyAnimation = () => {
    const container = containerRef.current
    const containerCenter = container.scrollTop + container.clientHeight / 2
    const ele2 = document.querySelectorAll('.text-scroll-item')[2]
    const ele2Center = ele2.offsetTop + ele2.clientHeight / 2
    if (ele2Center > containerCenter) {
      setShowText(true)
    } else {
      setShowText(false)
    }
    document.querySelectorAll('.text-scroll-item').forEach((element, index) => {
      if (element) {
        const elementTop = element.offsetTop
        const elementCenter = elementTop + element.clientHeight / 2
        const distanceToCenter = Math.abs(elementCenter - containerCenter)
        // const scale = Math.max(1 - distanceToCenter / container.clientHeight, 0.5);
        // console.log('distanceToCenter:', distanceToCenter)
        // console.log('elementCenter:', elementCenter)
        // console.log('containerCenter:', containerCenter)
        // console.log('container.clientHeight:', container.clientHeight)
        let scale
        if (elementCenter - containerCenter >= 0) {
          scale = Math.max(1.2 - (distanceToCenter / container.clientHeight) * 2.5, 0.5)
        } else {
          scale = 1.2 + (distanceToCenter / container.clientHeight) * 2.5
        }
        const opacity = Math.max(1 - (distanceToCenter / (container.clientHeight / 2)) * 1.2, 0.1)
        element.style.transform = `scale(${scale})`
        element.style.opacity = opacity
        if (index === 3) {
          element.style.fontStyle = 'italic'
        }
        if (index === 3 || index === 19 || index === 20) {
          element.style.fontWeight = 'bold'
        }
        // if (index === 0) {
        //   element.style.marginTop = '23.5vh'
        // }
        // if (textList.length - 1 === index) {
        //   element.style.marginBottom = '30vh'
        // }
      }
    })
  }

  // 监听滚动事件并应用动画
  useEffect(() => {
    const container = containerRef.current
    const handleScroll = () => {
      requestAnimationFrame(applyAnimation)
      const container = containerRef.current
      const percent = (container.scrollTop / (container.scrollHeight - container.clientHeight)) * 100
      setPercent(Math.round(percent))
    }
    container.addEventListener('scroll', handleScroll)

    // 首次加载时应用一次动画
    applyAnimation()

    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="text-scroll-wrapper">
      {textList.map((item, index) => (
        <motion.div
          style={{ marginTop: index === 0 ? '25vh' : 0, marginBottom: textList.length - 1 === index ? '30vh' : 0 }}
          className="text-scroll-item"
          key={index}>
          {item}
        </motion.div>
      ))}
    </div>
  )
}

export default ScrollAnimationExample
