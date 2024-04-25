import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ rawMaterials }) {
  console.log("Raw materials",rawMaterials);
  if (!rawMaterials || !Array.isArray(rawMaterials) || rawMaterials.length === 0) {
    return <div>No data available</div>;
  }

  // Extracting data for the chart
  const materialNames = rawMaterials.map(material => material["Item Name"]); 
  const quantities = rawMaterials.map(material => material["Quantity"]);

  // Chart data
  const data = {
    labels: materialNames,
    datasets: [
      {
        data: quantities,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#33FF33",
          "#9933FF",
          "#FF5733",
          "#33FFFF",
          "#FF3366"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#33FF33",
          "#9933FF",
          "#FF5733",
          "#33FFFF",
          "#FF3366"
        ]
      }
    ]
  };

  return (
    <div>
      <Pie data={data} />
    </div>
  );
}

export default PieChart;
