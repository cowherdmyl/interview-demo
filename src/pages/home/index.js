import React, { useState, useRef, useCallback, useEffect } from 'react'
import Loading from './components/Loading'
import Menus from './components/Menus'
import FirstScreen from './components/FirstScreen'
import TransitionBox from './components/TransitionBox'
import SecondScreen from './components/SecondScreen'
import { throttle } from 'lodash'
import './index.scss'

function App() {
  const appContainerRef = useRef(null)
  const firstScreenRef = useRef(null)
  const secondScreenRef = useRef(null)
  const [percent, setPercent] = useState(0)
  const [currentScreen, setCurrentScreen] = useState('firstScreen')
  // 定义动画状态
  const [isToggled, setIsToggled] = useState(false)
  // 定义状态来存储触摸开始时的Y坐标
  const [startY, setStartY] = useState(0)
  // 定义状态来存储滚动方向
  const [direction, setDirection] = useState('')

  const smoothScrollTo = (startElementRef, targetElementRef, duration) => {
    console.log('执行动画')
    return new Promise((resolve, reject) => {
      if (!startElementRef.current || !targetElementRef.current) {
        reject(new Error('Element reference not found.'))
      }
      const startPosition = startElementRef.current.scrollTop
      const targetPosition = targetElementRef.current.offsetTop
      const distance = targetPosition - startPosition
      let startTime = null
      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2
        if (t < 1) return (c / 2) * t * t * t + b // 增加t的次数，使得加速阶段更快
        t -= 2
        return (c / 2) * (t * t * t + 2) + b // 同样增加t的次数，使得减速阶段更快
        // t /= d
        // return c * t * t * t + b
      }
      const animation = currentTime => {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration)
        startElementRef.current.scrollTop = run
        if (timeElapsed < duration) {
          requestAnimationFrame(animation)
        } else {
          resolve() // 动画完成
        }
      }
      requestAnimationFrame(animation)
    })
  }

  const handleWheel = event => {
    // deltaY > 0 表示向下滚动，deltaY < 0 表示向上滚动
    if (event.deltaY > 0) {
      // console.log('向下滚动')
      if (percent === 100) {
        console.log('到底部了')
        handleScroll('secondScreen')
      }
    } else {
      // console.log('向上滚动')
      handleScroll('firstScreen')
    }
  }

  const handleScroll = useCallback(
    throttle(
      target => {
        if (target === 'secondScreen' && currentScreen === 'firstScreen') {
          smoothScrollTo(appContainerRef, secondScreenRef, 3000)
          setIsToggled(true)
          setCurrentScreen('secondScreen')
        }
        if (target === 'firstScreen' && currentScreen === 'secondScreen') {
          smoothScrollTo(appContainerRef, firstScreenRef, 3000)
          setIsToggled(true)
          setCurrentScreen('firstScreen')
        }
      },
      1000,
      { leading: true, trailing: false }
    ),
    [currentScreen]
  )

  // 触摸屏幕
  // 处理触摸开始事件
  const handleTouchStart = e => {
    const touchY = e.touches[0].clientY
    setStartY(touchY)
  }

  // 处理触摸移动事件
  const handleTouchMove = e => {
    const moveY = e.touches[0].clientY
    if (startY === 0) return // 如果没有触摸开始的Y坐标，直接返回

    const diffY = startY - moveY
    if (diffY > 0) {
      // 向上滑动
      setDirection('Up')
    } else if (diffY < 0) {
      // 向下滑动
      setDirection('Down')
    }
  }

  // 使用useEffect添加和移除事件监听器
  useEffect(() => {
    // 添加事件监听器
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchmove', handleTouchMove)

    // 清理函数，移除事件监听器
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [startY]) // 依赖项数组中包含startY，确保使用最新的startY值

  const hangleTouchMove = () => {
    if (direction === 'Up') {
      // console.log('向下滚动')
      if (percent === 100) {
        console.log('到底部了')
        handleScroll('secondScreen')
      }
    } else {
      // console.log('向上滚动')
      handleScroll('firstScreen')
    }
  }

  return (
    <div ref={appContainerRef} className="app-container" onWheel={handleWheel} onTouchMove={hangleTouchMove}>
      <Loading />
      <Menus percent={percent} handleScroll={handleScroll} />
      <FirstScreen setPercent={setPercent} ref={firstScreenRef} handleTopScroll={handleScroll} />
      <TransitionBox isToggled={isToggled} setIsToggled={setIsToggled} />
      <SecondScreen ref={secondScreenRef} />
    </div>
  )
}

export default App
