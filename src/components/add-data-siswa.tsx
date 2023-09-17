import React, { useState } from 'react';
import { Layout, theme, Select, SelectProps } from 'antd';
import SearchSelectUser from './search-select-user';
import AddPelanggaran from './add-pelanggaran';

const { Content } = Layout;

const options: SelectProps['options'] = [{
  value: 'VII', label: 'VII'
},{
  value: 'VIII', label: 'VIII'
},{
  value: 'IX', label: 'IX'
}];

const AddDataSiswa: React.FC = () => {
  const [kelas, setKelas] = useState("")
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleChange = (value: string | string[]) => {
    setKelas(value)
  };

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
      <h3>Tambah Data Pelanggaran Siswa</h3>
      <div style={{
          width: "100%",
          display: 'flex',
          justifyContent: 'flex-start',
          marginTop: "1rem",
        }}
      >
        <SearchSelectUser/>
        <Select
          size="large"
          placeholder="Pilih Kelas"
          onChange={handleChange}
          options={options}
          style={{ width: '15%', marginLeft: '1rem' }}
        />
        <AddPelanggaran/>
      </div>
    </Content>
  );
};

export default AddDataSiswa;