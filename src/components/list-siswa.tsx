import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import TableSiswa from './table-siswa';

const { Content } = Layout;

const ListSiswa: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Content
        style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            color: 'black'
        }}
    >
        <TableSiswa/>
    </Content>
  );
};

export default ListSiswa;