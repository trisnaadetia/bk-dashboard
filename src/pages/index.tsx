import React, { useState } from 'react';
import Image from 'next/image';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import ListSiswa from '@/components/list-siswa';

const { Header, Sider, Content } = Layout;

const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};

const handleMenuClick: MenuProps['onClick'] = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const items: MenuProps['items'] = [
  {
    label: 'Logout',
    key: '1',
  }
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const Index: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [menuKey, setMenuKey] = useState('1');

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="profile">
          <Image width={40} height={40} src="/logos/logo_smpn.png" alt="profile"/>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onSelect={({ item, key}) => setMenuKey(key)}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'List Siswa',
            },
            {
              key: '2',
              icon: <UploadOutlined />,
              label: 'Tambah Data Siswa',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          <span>Dashboard Siswa SMPN 1 CIPARAY</span>
          {/* <Dropdown.Button menu={menuProps} icon={<UserOutlined />}>
            Halo, Riska Elsa Pratiwi
          </Dropdown.Button> */}
        </Header>
        <ListSiswa/>
      </Layout>
    </Layout>
  );
};

export default Index;