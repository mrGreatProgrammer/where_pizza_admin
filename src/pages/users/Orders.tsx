import React from "react";
import { useGetAllOrdersQuery } from "../../http/service/ordersService";
import OrdersTable from '../../compoents/tables/OrdersTable'

const Orders = () => {
  const [page, setPage] = React.useState<number>(1);
  const { isError, isLoading, data } = useGetAllOrdersQuery(page);

  return (
    <div>
      <OrdersTable
        data={data}
        isLaoding={isLoading}
        isError={isError}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default Orders;
