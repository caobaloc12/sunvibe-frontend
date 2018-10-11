import React from 'react';
import { Menu } from 'antd';
import { Link } from 'dva/router';

function Header({ location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="/">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="/investors">
        <Link to="/investors">Investors</Link>
      </Menu.Item>
      <Menu.Item key="/calculator">
        <Link to="/calculator">Calculator</Link>
      </Menu.Item>
      <Menu.Item key="/vendors">
        <Link to="/vendors">Vendors</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
