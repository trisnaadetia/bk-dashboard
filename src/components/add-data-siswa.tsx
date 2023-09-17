import React, { useState } from 'react';
import { Layout, theme, Select, SelectProps, Button } from 'antd';
import SearchSelectUser from './search-select-user';
import AddPelanggaran from './add-pelanggaran';
import ModalConfirmation from './modal-confirmation';
import UploadFIle from './upload-file'

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
  const [openModal, setOpenModal] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleChange = (value: string | string[]) => {
    setKelas(value)
  };

  return (
    <Content>
      <div
        style={{
          margin: '24px 16px',
          padding: 24,
          background: colorBgContainer,
          color: 'black'
        }}
      >
        <h3>Tambah Data Pelanggaran</h3>
        <div style={{
            width: "100%",
            display: 'flex',
            justifyContent: 'flex-start',
            marginTop: "1rem",
          }}
        >
          <SearchSelectUser/>
          <Select
            placeholder="Pilih Kelas"
            onChange={handleChange}
            options={options}
            style={{ width: '15%', marginLeft: '1rem' }}
          />
          <AddPelanggaran/>
          <Button 
            type="primary"
            style={{ marginLeft: '1rem' }}
            onClick={() => setOpenModal(true)}
          >
            Tambah Data
          </Button>
        </div>
      </div>
      <div
        style={{
          margin: '24px 16px',
          padding: 24,
          background: colorBgContainer,
          color: 'black'
        }}
      >
        <h3>Upload Data Siswa</h3>
        <div style={{
            width: "100%",
            marginTop: "1rem",
          }}
        >
          <UploadFIle/>
          <div
            style={{ 
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '1rem'
            }}
          >
              <Button style={{ marginRight: '1rem' }}>Download Template</Button>
              <Button type='primary'>Upload File</Button>
          </div>
        </div>
      </div>
      <ModalConfirmation open={openModal} onClose={() => setOpenModal(false)}/>
    </Content>
  );
};

export default AddDataSiswa;