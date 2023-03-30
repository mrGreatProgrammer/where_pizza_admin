import React from "react";
import { Empty, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";

interface DataType {
  key: React.Key;
  id: number;
  fullName: string;
  tel: string;
  email: string;
  password: string;
  role: string;
  birthDate: string;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "fullName",
    dataIndex: "fullName",
  },
  {
    title: "tel",
    dataIndex: "tel",
    // sorter: {
    //   compare: (a, b) => a.tel - b.tel,
    //   multiple: 3,
    // },
  },
  {
    title: "email",
    dataIndex: "email",
    // sorter: {
    //   compare: (a, b) => a.math - b.math,
    //   multiple: 2,
    // },
  },
  {
    title: "role",
    dataIndex: "role",
    // sorter: {
    //   compare: (a, b) => a.english - b.english,
    //   multiple: 1,
    // },
  },
  {
    title: "birthDate",
    dataIndex: "birthDate",
    // sorter: {
    //   compare: (a, b) => a.english - b.english,
    //   multiple: 1,
    // },
  },
  {
    title: "address",
    dataIndex: "address",
    // sorter: {
    //   compare: (a, b) => a.english - b.english,
    //   multiple: 1,
    // },
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

interface usersDataApi {
  count: number;
  rows: DataType[];
}

interface UsersTableType {
  data: usersDataApi | null;
  isLaoding: boolean;
  isError: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const UsersTable = ({
  page,
  setPage,
  data,
  isLaoding,
  isError,
}: UsersTableType) => {
  return (
    <div className="max-w-5xl">
      <Table
        columns={columns}
        dataSource={data?.rows}
        loading={isLaoding}
        locale={{
          emptyText() {
            return (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="Данных нет"
              />
            );
          },
        }}
        pagination={{ current: page, onChange: setPage, total: data?.count, pageSize: 8 }}
        // onChange={onChange}
      />
    </div>
  );
};

export default UsersTable;
