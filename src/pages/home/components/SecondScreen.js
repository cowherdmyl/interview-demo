import React from 'react'

const SecondScreen = (_, ref) => {
  return <div ref={ref} className="second-screen"></div>
}

export default React.forwardRef(SecondScreen)
