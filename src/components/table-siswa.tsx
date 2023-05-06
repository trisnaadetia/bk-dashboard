import React, { useRef, useState } from 'react';
import { Table, Tag, InputRef, Input, Space, Button } from 'antd';
import type { ColumnsType, TableProps, ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import Image from 'next/image';

interface DataType {
  key: React.Key;
  name: string;
  kelas: number;
  jenisPelanggaran: string[];
  totalScore: number;
  jenisKelamin: string;
}

type DataIndex = keyof DataType;

const TableSiswa: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);

    const handleSearch = (
        selectedKeys: string[],
        confirm: (param?: FilterConfirmProps) => void,
        dataIndex: DataIndex,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
        <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
            <Input
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            style={{ marginBottom: 8, display: 'block' }}
            />
            <Space>
            <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: 90 }}
            >
                Search
            </Button>
            <Button
                onClick={() => clearFilters && handleReset(clearFilters)}
                size="small"
                style={{ width: 90 }}
            >
                Reset
            </Button>
            <Button
                type="link"
                size="small"
                onClick={() => {
                confirm({ closeDropdown: false });
                setSearchText((selectedKeys as string[])[0]);
                setSearchedColumn(dataIndex);
                }}
            >
                Filter
            </Button>
            <Button
                type="link"
                size="small"
                onClick={() => {
                close();
                }}
            >
                close
            </Button>
            </Space>
        </div>
        ),
        filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
        record[dataIndex]
            .toString()
            .toLowerCase()
            .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
        if (visible) {
            setTimeout(() => searchInput.current?.select(), 100);
        }
        },
        render: (text) =>
        searchedColumn === dataIndex ? (
            <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
            />
        ) : (
            text
        ),
    });

    const columns: ColumnsType<DataType> = [
    {
        dataIndex: 'jenisKelamin',
        key: 'jenisKelamin',
        colSpan: 0,
        width: '5%',
        render: (jenisKelamin: string) => (
            <div>
                {
                    jenisKelamin === 'L' ? (
                        <Image width={30} height={30} src="/images/male.png" alt="male"/>
                    ) : (
                        <Image width={30} height={30} src="/images/female.png" alt="female"/>
                    )
                }
            </div>
        )
    },
    {
        title: 'Nama',
        dataIndex: 'name',
        key: 'name',
        ...getColumnSearchProps('name'),
        colSpan: 2,
        align: 'left',
        width: '20%'
    },
    {
        title: 'Kelas',
        dataIndex: 'kelas',
        key: 'kelas',
        sorter: {
            compare: (a, b) => a.kelas - b.kelas,
            multiple: 2,
        },
        width: '10%'
    },
    {
        title: 'Jenis Pelanggaran',
        dataIndex: 'jenisPelanggaran',
        key: 'jenisPelanggaran',
        render: (jenisPelanggaran: string[]) => (
            <span>
            {jenisPelanggaran.map((tag) => {
                let color = tag.length > 10 ? 'geekblue' : 'green';
                if (tag === 'Merokok') {
                color = 'volcano';
                }
                if (tag === 'Mencuri') {
                    color = 'yellow';
                }
                return (
                <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                </Tag>
                );
            })}
            </span>
        ),
        width: '50%'
    },
    {
        title: 'Total Score',
        dataIndex: 'totalScore',
        key: 'totalScore',
        sorter: {
        compare: (a, b) => a.totalScore - b.totalScore,
        multiple: 2,
        },
        width: '15%'
    },
    ];

    const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        kelas: 7,
        jenisPelanggaran: ['Merokok'],
        totalScore: 70,
        jenisKelamin: 'L'
    },
    {
        key: '2',
        name: 'Jim Green',
        kelas: 8,
        jenisPelanggaran: ['Minuman Keras', 'Merokok', 'Berkelahi'],
        totalScore: 89,
        jenisKelamin: 'L'
    },
    {
        key: '3',
        name: 'Joe Black',
        kelas: 8,
        jenisPelanggaran: ['Berkelahi'],
        totalScore: 70,
        jenisKelamin: 'P'
    },
    {
        key: '4',
        name: 'Jim Red',
        kelas: 9,
        jenisPelanggaran: ['Mencuri', 'Merokok', 'Berkelahi'],
        totalScore: 89,
        jenisKelamin: 'P'
    },
    ];

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
    };
    return (
        <Table columns={columns} dataSource={data} onChange={onChange} />
    )
};

export default TableSiswa;