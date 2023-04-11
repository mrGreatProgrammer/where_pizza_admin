import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Col, Row, Statistic } from "antd";
import CountUp from 'react-countup';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const formatter = (value: number) => <CountUp end={value} separator="," />;

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [1, 5, 8, 15, 7, 25, 10, 3, 54],
      backgroundColor: "#FF7010",
    },
    {
      label: "Dataset 2",
      data: [1, 5, 8, 15, 7, 25, 10, 3, 54],
      backgroundColor: "#FFEEE2",
    },
  ],
};

const UserStatistic = () => {
  return (
    <div>
      <div>
        <Bar options={options} data={data} />
      </div>
      <div className="my-14" >
        <Row gutter={16}>
          <Col span={12}>
            <Statistic
              title="Active Users"
              value={112893}
              //@ts-ignore
              formatter={formatter}
              />
          </Col>
          <Col span={12}>
            <Statistic
              title="Account Balance (CNY)"
              value={272813}
              precision={2}
              //@ts-ignore
              formatter={formatter}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UserStatistic;
