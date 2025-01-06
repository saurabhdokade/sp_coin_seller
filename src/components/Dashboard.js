import React from "react";
import ChartComponent from "./Chart.tsx";

const Dashboard = () => {
  const data = {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        label: "Total Orders",
        data: [10, 20, 15, 25],
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <ChartComponent data={data} options={options} />
    </div>
  );
};

export default Dashboard;
