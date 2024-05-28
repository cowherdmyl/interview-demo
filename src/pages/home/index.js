import React from 'react'
// import myVideo from '../../assets/intro.mp4'

function App() {
  return (
    <div className="App">
      {/* <video autoPlay muted loop preload="auto">
        <source src="https://cowherdmyl-6g4qp1up02368618-1317320311.tcloudbaseapp.com/intro.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video> */}
      <video src="https://cowherdmyl-6g4qp1up02368618-1317320311.tcloudbaseapp.com/intro.mp4" controls>
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default App
