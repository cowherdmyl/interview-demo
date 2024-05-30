import React, { useState } from 'react'
import { Menu, Row, Col, Progress } from 'antd'
import logoWhite from '../../../assets/logo-white.svg'
import HamburgerMenu from './HamburgerMenu'
import HamburgerMask from './HamburgerMask'

function Menus({ percent, handleScroll }) {
  const [menukey, setMenukey] = useState('0')
  const [showHamburgerMask, setShowHamburgerMask] = useState(false)
  const handleMenuClick = e => {
    setMenukey(e.key)
    // 你可以在这里根据 e.key 来区分不同的菜单项并执行相应的逻辑
    if (e.key === '0') {
      handleScroll('firstScreen')
    }
    if (e.key === '1') {
      handleScroll('secondScreen')
    }
  }
  const menuItems = [
    {
      label: (
        <div className="label-style0">
          <div>introduction</div>
          <Progress
            className="progress0"
            showInfo={false}
            strokeLinecap="butt"
            strokeColor="white"
            trailColor="#aaa"
            percent={percent}
            size="small"
            style={{ display: menukey === '0' ? 'block' : 'none' }}
          />
        </div>
      ),
      key: '0',
    },
    {
      label: (
        <div className="label-style1">
          <div>the technology</div>
          <Progress
            className="progress1"
            showInfo={false}
            strokeLinecap="butt"
            strokeColor="white"
            trailColor="#aaa"
            percent={100}
            size="small"
            style={{ display: menukey === '1' ? 'block' : 'none' }}
          />
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
