import React, { useState, useEffect } from 'react';
import { Layout, theme, Skeleton } from 'antd';
import TableSiswa from './table-siswa';

const { Content } = Layout;

const ListSiswa: React.FC = () => {
  const [loading, setLoading] = useState(true)

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);

  },[loading])

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
      <Skeleton loading={loading} active/>
        { 
          !loading && (
            <TableSiswa/>
          )
        }
    </Content>
  );
};

export default ListSiswa;