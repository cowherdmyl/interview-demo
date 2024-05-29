import React, { useEffect, useRef, useState } from 'react'
import videoSource from '../../../assets/intro.mp4'
import imgbg from '../../../assets/intro-background.jpg'

function VideoPlayer() {
  // 使用 useRef 创建一个 ref 对象，用于引用视频元素
  const videoRef = useRef(null)
  const [showImg, setShowImg] = useState(false)

  useEffect(() => {
    // 检查 videoRef 是否指向一个 DOM 元素
    if (videoRef.current) {
      videoRef.current.muted = true // 确保视频静音
      const promise = videoRef.current.play()
      if (promise !== undefined) {
        promise
          .then(res => {
            // 自动播放开始
            console.log('视频自动播放', res)
          })
          .catch(error => {
            // 自动播放失败
            console.log('视频无法自动播放，显示图片', error)
            setShowImg(true)
          })
      }
    }
  }, []) // 空依赖数组意味着这个 useEffect 只在组件挂载时执行一次

  return (
    <div className="video-player">
      <img id="bgImg" src={imgbg} alt="" style={{ display: showImg ? 'block' : 'none' }} />
      <video id="bgVideo" ref={videoRef} loop playsInline style={{ display: showImg ? 'none' : 'block' }}>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoPlayer
