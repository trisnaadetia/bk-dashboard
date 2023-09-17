import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  jenisPelanggaran: string;
  kode: string;
  score: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Jenis Pelanggaran',
    dataIndex: 'jenisPelanggaran',
    key: 'jenisPelanggaran',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Kode',
    dataIndex: 'kode',
    key: 'kode',
  },
  {
    title: 'Score',
    dataIndex: 'score',
    key: 'score',
  }
];

const data: DataType[] = [
  {
    key: '1',
    jenisPelanggaran: 'Mencuri',
    kode: 'A1',
    score: 20,
  },
  {
    key: '2',
    jenisPelanggaran: 'Berbohong',
    kode: 'A2',
    score: 10,
  },
  {
    key: '3',
    jenisPelanggaran: 'Merokok',
    kode: 'B1',
    score: 45,
  },
  {
    key: '4',
    jenisPelanggaran: 'Minuman Keras',
    kode: 'C1',
    score: 60,
  },
  {
    key: '1',
    jenisPelanggaran: 'Mencuri',
    kode: 'A1',
    score: 20,
  },
  {
    key: '2',
    jenisPelanggaran: 'Berbohong',
    kode: 'A2',
    score: 10,
  },
  {
    key: '3',
    jenisPelanggaran: 'Merokok',
    kode: 'B1',
    score: 45,
  },
  {
    key: '4',
    jenisPelanggaran: 'Minuman Keras',
    kode: 'C1',
    score: 60,
  }
];

const TableListPelanggaran: React.FC = () => <Table columns={columns} dataSource={data} pagination={false} scroll={{ y: 350 }}/>;

export default TableListPelanggaran;