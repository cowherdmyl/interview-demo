import React, { useState, useRef, useCallback } from 'react'
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

  return (
    <div ref={appContainerRef} className="app-container" onWheel={handleWheel}>
      <Loading />
      <Menus percent={percent} handleScroll={handleScroll} />
      <FirstScreen setPercent={setPercent} ref={firstScreenRef} />
      <TransitionBox isToggled={isToggled} setIsToggled={setIsToggled} />
      <SecondScreen ref={secondScreenRef} />
    </div>
  )
}

export default App
