import React, { useState, useEffect } from 'react';
import { Layout, theme, Skeleton } from 'antd';
import TableListPelanggaran from './table-pelanggaran';

const { Content } = Layout;

const ListPelanggaran: React.FC = () => {
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
            color: 'black',
            overflow: 'auto'
        }}
    >
      <Skeleton loading={loading} active/>
        { 
          !loading && (
            <>
              <h3 style={{ marginBottom: '1rem' }}>Daftar Pelanggaran</h3>
              <TableListPelanggaran/>
            </>
          )
        }
    </Content>
  );
};

export default ListPelanggaran;