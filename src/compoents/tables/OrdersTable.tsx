import React from "react";
import { Empty, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";

interface DataType {
  apartment: "32";
  createdAt: "2023-03-18T21:20:29.000Z";
  deliveryMode: false;
  email: "gffdsfg@gffzgjgf.ffa";
  fastPrepareTheOrder: true;
  floor: "3";
  house: "21";
  id: 1;
  intercom: "1234";
  orderStatus: null;
  orderedProducts: '[{"id":1,"name":"Чикен Сладкий Чили","img":"[\\"/static/d86d77e8-9ca1-4cc6-8031-322e01762803-rectangle.png\\",\\"/static/6a166919-722c-434b-8e5c-8e8d175fed03-rectangle1.png\\",\\"/static/d7a74622-d854-4c5f-81f7-e3436c658e47-rectangle7.png\\"]","about":"вкусная пицца","discount":499,"price":399,"count":1,"ingredients":[{"id":1,"img":null,"name":"Моцарелло","price":5,"createdAt":"2023-03-18T15:13:57.000Z","updatedAt":"2023-03-18T15:13:57.000Z","Product_Ingregient":{"id":1,"createdAt":"2023-03-18T15:18:10.000Z","updatedAt":"2023-03-18T15:18:10.000Z","productId":1,"ingredientId":1}},{"id":2,"img":null,"name":"Пеперони","price":7,"createdAt":"2023-03-18T15:15:25.000Z","updatedAt":"2023-03-18T15:15:25.000Z","Product_Ingregient":{"id":2,"createdAt":"2023-03-18T15:18:10.000Z","updatedAt":"2023-03-18T15:18:10.000Z","productId":1,"ingredientId":2}}]},{"id":2,"name":"Четыре сезона","img":"[\\"/static/cfb81731-ce97-4391-8de2-cec461482819-rectangle7.png\\",\\"/static/acfec68f-922e-4c8a-b8b3-d20fd0e71a1e-rectangle8.png\\"]","about":"пицца четыре сезона","discount":399,"price":299,"count":1,"ingredients":[{"id":2,"img":null,"name":"Пеперони","price":7,"createdAt":"2023-03-18T15:15:25.000Z","updatedAt":"2023-03-18T15:15:25.000Z","Product_Ingregient":{"id":3,"createdAt":"2023-03-18T15:29:56.000Z","updatedAt":"2023-03-18T15:29:56.000Z","productId":2,"ingredientId":2}},{"id":3,"img":null,"name":"Груша","price":3,"createdAt":"2023-03-18T15:15:43.000Z","updatedAt":"2023-03-18T15:15:43.000Z","Product_Ingregient":{"id":4,"createdAt":"2023-03-18T15:29:56.000Z","updatedAt":"2023-03-18T15:29:56.000Z","productId":2,"ingredientId":3}}]}]';
  payedStatus: null;
  paymentType: 1;
  phoneNum: "908443171";
  proch: "3";
  restaurant: "1";
  street: "УлицаУлица";
  timePrepareTheOrder: "2023-03-21 20:40:52";
  totalCount: 2;
  totalPrice: 698;
  updatedAt: "2023-03-18T21:20:29.000Z";
  userComments: "КомментарийКомментарий Комментарий КомментарийКомментарий vКомментарийКомментарийКомментарий vcКомментарийКомментарийКомментарийv vКомментарий";
  userFullName: "Умар";
  userId: 4;
  withChange: true;
  withChangeNum: "774";
}

const columns: ColumnsType<DataType> = [
  {
    title: "Номер заказа",
    dataIndex: "id",
  },
  {
    title: "userFullName",
    dataIndex: "userFullName",
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
    title: "phoneNum",
    dataIndex: "phoneNum",
    // sorter: {
    //   compare: (a, b) => a.english - b.english,
    //   multiple: 1,
    // },
  },
  {
    title: "totalCount",
    dataIndex: "totalCount",
    // sorter: {
    //   compare: (a, b) => a.english - b.english,
    //   multiple: 1,
    // },
  },
  {
    title: "totalPrice",
    dataIndex: "totalPrice",
    // sorter: {
    //   compare: (a, b) => a.english - b.english,
    //   multiple: 1,
    // },
  },
  {
    title: "orderStatus",
    dataIndex: "orderStatus",
    // sorter: {
    //   compare: (a, b) => a.english - b.english,
    //   multiple: 1,
    // },
  },
  {
    title: "payedStatus",
    dataIndex: "payedStatus",
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

interface ordersDataApi {
  count: number;
  rows: DataType[];
}

interface OrdersTableType {
  data: ordersDataApi | null;
  isLaoding: boolean;
  isError: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const OrdersTable = ({
  page,
  setPage,
  data,
  isLaoding,
  isError,
}: OrdersTableType) => {
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
        pagination={{ current: page, onChange: setPage, size: 'small', total: data?.count }}
        // onChange={onChange}
      />
    </div>
  );
};

export default OrdersTable;
