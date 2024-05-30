import React from 'react'

const SecondScreen = ({ showSecondScreen = true }, ref) => {
  return <div ref={ref} className="second-screen" style={{ display: showSecondScreen ? 'block' : 'none' }}></div>
}

export default React.forwardRef(SecondScreen)
