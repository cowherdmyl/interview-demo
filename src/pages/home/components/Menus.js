import React, { useState } from 'react'
import { Menu, Row, Col, Progress } from 'antd'
import logoWhite from '../../../assets/logo-white.svg'
import HamburgerMenu from './HamburgerMenu'
import HamburgerMask from './HamburgerMask'
import { motion } from 'framer-motion'

function Menus({ percent, setDirection, handleScroll, menukey, setMenukey }) {
  const [showHamburgerMask, setShowHamburgerMask] = useState(false)
  const handleMenuClick = e => {
    setMenukey(e.key)
    // 你可以在这里根据 e.key 来区分不同的菜单项并执行相应的逻辑
    if (e.key === '0') {
      setDirection('Down')
    }
    if (e.key === '1') {
      setDirection('Up')
      handleScroll('secondScreen')
    }
  }
  // 定义动画变体
  const variants = {
    visible: { opacity: 1, display: 'block' },
    hidden: { opacity: 0, display: 'none' },
  }

  const menuItems = [
    {
      label: (
        <div className="label-style0">
          <div>introduction</div>
          <motion.div
            className="progress0-wrapper"
            initial="hidden" // 初始状态
            animate={menukey === '0' ? 'visible' : 'hidden'} // 动画状态
            variants={variants} // 使用定义的变体
            transition={{ duration: 0.5 }} // 动画过渡属性
          >
            <Progress
              className="progress0"
              showInfo={false}
              strokeLinecap="butt"
              strokeColor="white"
              trailColor="#aaa"
              percent={percent}
              size="small"
            />
          </motion.div>
        </div>
      ),
      key: '0',
    },
    {
      label: (
        <div className="label-style1">
          <div>the technology</div>
          <motion.div
            className="progress1-wrapper"
            initial="hidden" // 初始状态
            animate={menukey === '1' ? 'visible' : 'hidden'} // 动画状态
            variants={variants} // 使用定义的变体
            transition={{ duration: 0.5 }} // 动画过渡属性
          >
            <Progress
              className="progress1"
              showInfo={false}
              strokeLinecap="butt"
              strokeColor="white"
              trailColor="#aaa"
              percent={100}
              size="small"
            />
          </motion.div>
        </div>
      ),
      key: '1',
    },
    {
      label: (
        <div className="label-style1">
          <div>tech spotlight</div>
          <Progress
            className="progress1"
            showInfo={false}
            strokeLinecap="butt"
            strokeColor="white"
            trailColor="#aaa"
            percent={100}
            size="small"
            style={{ display: menukey === '2' ? 'block' : 'none' }}
          />
        </div>
      ),
      key: '2',
      disabled: true,
    },
    {
      label: (
        <div className="label-style1">
          <div>why music?</div>
          <Progress
            className="progress1"
            showInfo={false}
            strokeLinecap="butt"
            strokeColor="white"
            trailColor="#aaa"
            percent={100}
            size="small"
            style={{ display: menukey === '3' ? 'block' : 'none' }}
          />
        </div>
      ),
      key: '3',
      disabled: true,
    },
  ]

  return (
    <div className="menu-container">
      <Row className="menu-row">
        <Col span={4} className="menu-row-col1">
          <img className="menu-logo-icon" src={logoWhite} alt="img" />
        </Col>
        <Col flex={1} className="menu-row-col2">
          <Menu
            className="menu-style"
            mode="horizontal"
            defaultSelectedKeys={[menukey]}
            items={menuItems}
            onClick={handleMenuClick}
          />
        </Col>
        <Col span={4} className="menu-row-col3">
          <HamburgerMenu setShowHamburgerMask={setShowHamburgerMask} />
        </Col>
      </Row>
      <HamburgerMask isVisible={showHamburgerMask} />
    </div>
  )
}

export default Menus
