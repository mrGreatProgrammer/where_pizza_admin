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
      <Bar options={options} data={data} />
    </div>
  );
};

export default UserStatistic;
