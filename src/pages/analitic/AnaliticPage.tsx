import React from "react";
import UserStatistic from "../../compoents/statistics/UserStatistic";
import OrdersStatistics from "../../compoents/statistics/orders/OrdersStatistics/OrdersStatistics";

const AnaliticPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-primery my-2">DashboardPage</h1>
      <div>
        <div className="w-[850px]" >
          <h3>user statistic</h3>
          <UserStatistic />
        </div>
        <div className="w-[850px] my-20" >
          <OrdersStatistics />
        </div>
      </div>
    </div>
  );
};

export default AnaliticPage;
