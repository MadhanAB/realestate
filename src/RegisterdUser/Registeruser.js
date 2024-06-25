import React from 'react';
import './Registered.css';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const { SubMenu } = Menu;

const items = [
  {
    key: 'sub1',
    icon: <MenuUnfoldOutlined />,
    
    children: [
      {
        key: '9',
        label: 'Option 9',
      },
      {
        key: '10',
        label: 'Option 10',
      },
    ],
  },
];

const App = () => {
  return (
    <div
      style={{
        width: 96,
      }}
    >
      <Menu
        mode="horizontal"
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <SubMenu key="sub1" icon={<MenuUnfoldOutlined />} >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default App;