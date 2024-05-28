import React, { useEffect, useRef } from 'react'
import videoSource from '../../../assets/intro.mp4'

function VideoPlayer() {
  // 使用 useRef 创建一个 ref 对象，用于引用视频元素
  const videoRef = useRef(null)

  useEffect(() => {
    // 检查 videoRef 是否指向一个 DOM 元素
    if (videoRef.current) {
      videoRef.current.muted = true // 确保视频静音
      videoRef.current.play()
    }
  }, []) // 空依赖数组意味着这个 useEffect 只在组件挂载时执行一次

  return (
    <video ref={videoRef} loop playsInline>
      <source src={videoSource} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default VideoPlayer
