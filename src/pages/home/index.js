import React, { useState, useRef, useEffect } from 'react'
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
  const transitionBoxRef = useRef(null)
  const secondScreenRef = useRef(null)
  const [percent, setPercent] = useState(0)
  const [currentScreen, setCurrentScreen] = useState('firstScreen')
  // 定义动画状态
  const [isToggled, setIsToggled] = useState(false)
  // 触摸
  const [startY, setStartY] = useState(0)
  const [direction, setDirection] = useState('')

  const handleWheel = event => {
    if (event.deltaY > 0) {
      console.log('设置up')
      setDirection('Up')
    } else {
      console.log('设置down')
      setDirection('Down')
    }
  }
  // 触摸屏幕
  const handleTouchStart = e => {
    const touchY = e.touches[0].clientY
    setStartY(touchY)
  }

  const hangleTouchMove = e => {
    const moveY = e.touches[0].clientY
    if (startY === 0) return
    const diffY = startY - moveY
    if (diffY > 0) {
      setDirection('Up')
    } else if (diffY < 0) {
      setDirection('Down')
    }
  }

  useEffect(() => {
    //内容up
    if (direction === 'Up' && currentScreen === 'firstScreen') {
      if (percent === 100) {
        handleScroll('secondScreen')
      }
    }

    //内容down
    if (direction === 'Down' && currentScreen === 'secondScreen') {
      handleScroll('firstScreen')
    }
  }, [direction, percent, currentScreen])

  const handleScroll = throttle(
    target => {
      if (target === 'secondScreen') {
        // 直接操作DOM hidden 第二屏幕和过渡盒TransitionBox
        // transitionBoxRef.current.style.display = 'block'
        // secondScreenRef.current.style.display = 'block'
        setIsToggled(true)
        smoothScrollTo(appContainerRef.current, secondScreenRef.current, 1500).then(() => {
          // firstScreenRef.current.style.display = 'none'
          // transitionBoxRef.current.style.display = 'none'
          setCurrentScreen('secondScreen')
        })
      }
      if (target === 'firstScreen') {
        // firstScreenRef.current.style.display = 'block'
        // transitionBoxRef.current.style.display = 'block'
        setIsToggled(true)
        smoothScrollTo(appContainerRef.current, firstScreenRef.current, 1500).then(() => {
          // transitionBoxRef.current.style.display = 'none'
          // secondScreenRef.current.style.display = 'none'
          setCurrentScreen('firstScreen')
        })
      }
    },
    1000,
    { leading: true, trailing: false }
  )

  const smoothScrollTo = (startElementRef, targetElementRef, duration) => {
    return new Promise((resolve, reject) => {
      if (!startElementRef || !targetElementRef) {
        reject(new Error('Element reference not found.'))
      }
      const startPosition = startElementRef.scrollTop
      const targetPosition = targetElementRef.offsetTop
      console.log('startPosition', startPosition)
      console.log('targetPosition', targetPosition)
      const distance = targetPosition - startPosition
      let startTime = null
      const easeInOutQuad = (t, b, c, d, power) => {
        t /= d
        return c * Math.pow(t, power) + b
      }
      const animation = currentTime => {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration, 3)
        startElementRef.scrollTop = run
        if (timeElapsed < duration) {
          requestAnimationFrame(animation)
        } else {
          resolve() // 动画完成
        }
      }
      requestAnimationFrame(animation)
    })
  }

  return (
    <div
      ref={appContainerRef}
      className="app-container"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={hangleTouchMove}>
      <Loading />
      <Menus percent={percent} setDirection={setDirection} />
      <FirstScreen ref={firstScreenRef} setPercent={setPercent} />
      <TransitionBox ref={transitionBoxRef} isToggled={isToggled} setIsToggled={setIsToggled} />
      <SecondScreen ref={secondScreenRef} />
    </div>
  )
}

export default App
