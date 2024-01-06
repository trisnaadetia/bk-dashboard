import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DownOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Dropdown, Space, MenuProps } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import Table from '../components/table_siswa';

const { Header, Sider, Content } = Layout;

const items: MenuProps['items'] = [
  {
    label: (
      <a href="/">
        logout
      </a>
    ),
    key: '0',
  }
];

const Home: React.FC = () => {
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.logo}>
          <Image
            src={"/logos/logo_smpn.png"}
            width={50}
            height={50}
            alt="Logo"
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined rev={undefined} />,
              label: 'List Siswa',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined rev={undefined} />,
              label: 'Tambah data',
            },
            {
              key: '3',
              icon: <UploadOutlined rev={undefined} />,
              label: 'Upload Data',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div className={styles.topNavigation}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined rev={undefined} /> : <MenuFoldOutlined rev={undefined} />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <div className={styles.user}>
              <UserOutlined rev={undefined} style={{ marginRight: '0.5rem' }}/>
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <h4>Riska Elsa Pratiwi</h4>
                    <DownOutlined rev={undefined} />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            height: '88vh',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Table/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
