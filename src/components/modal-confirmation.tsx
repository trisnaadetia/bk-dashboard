import { useState } from 'react';
import { Button, Modal } from 'antd';

const ModalConfirmation: React.FC = (props:any) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Apakah data yang Anda masukkan sudah benar?');

  const handleOk = () => {

  };

  return (
    <>
      <Modal
        title="Tambah Data Siswa"
        open={props.open}
        onCancel={props.onClose}
        confirmLoading={confirmLoading}
        footer={[
          <Button key="back" onClick={props.onClose}>
            Kembali
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Ya, sudah
          </Button>
        ]}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default ModalConfirmation;