import React, { useState } from 'react'
import { Menu, Row, Col, Progress } from 'antd'
import logoWhite from '../../../assets/logo-white.svg'
import HamburgerMenu from './HamburgerMenu'

function Menus({ percent }) {
  const [menukey, setMenukey] = useState('0')
  const handleMenuClick = e => {
    setMenukey(e.key)
    // 你可以在这里根据 e.key 来区分不同的菜单项并执行相应的逻辑
    // if (e.key === '0') {
    //   handleSetScrollSecond(0)
    // }
    // if (e.key === '1') {
    //   handleSetScrollSecond(2070)
    // }
  }
  const menuItems = [
    {
      label: (
        <div className="label-style0">
          <div>INTRODUCTION</div>
          <Progress
            className="progress0"
            showInfo={false}
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
          <div>NAVIGATION ONE</div>
          <Progress
            className="progress1"
            showInfo={false}
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
  ]

  return (
    <div className="menu-container">
      <Row className="menu-row" align="bottom">
        <Col span={4}>
          <img className="menu-logo-icon" src={logoWhite} alt="img" />
        </Col>
        <Col flex={1} style={{ display: 'flex', justifyContent: 'center' }}>
          <Menu
            className="menu-style"
            mode="horizontal"
            defaultSelectedKeys={[menukey]}
            items={menuItems}
            onClick={handleMenuClick}
          />
        </Col>
        <Col span={4}>
          <HamburgerMenu />
        </Col>
      </Row>
    </div>
  )
}

export default Menus
