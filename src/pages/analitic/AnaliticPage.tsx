import React from "react";
import UserStatistic from "../../compoents/statistics/UserStatistic";

const AnaliticPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-primery">DashboardPage</h1>
      <div>
        <div className="w-[850px]" >
          <h3>user statistic</h3>
          <UserStatistic />
        </div>
      </div>
    </div>
  );
};

export default AnaliticPage;
