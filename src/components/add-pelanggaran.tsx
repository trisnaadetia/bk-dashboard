import React, { useState } from 'react';
import { Layout, theme, Select, SelectProps } from 'antd';

const options: SelectProps['options'] = [{
  value: 'Merokok', label: 'Merokok'
},{
  value: 'Mencuri', label: 'Mencuri'
},{
  value: 'Berkelahi', label: 'Berkelahi'
},
{
  value: 'Minuman Keras', label: 'Minuman Keras'
}];

const AddPelanggaran: React.FC = () => {
  const [pelanggaran, setPelanggaran] = useState("")

  const handleChange = (value: string | string[]) => {
    setPelanggaran(value)
  };

  return (
    <Select
      placeholder="Pilih Jenis Pelanggaran"
      onChange={handleChange}
      options={options}
      style={{ width: '50%', marginLeft: '1rem' }}
    />
  );
};

export default AddPelanggaran;