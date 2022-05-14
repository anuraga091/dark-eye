import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';

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
      position: 'top',
    },
    title: {
      display: true,
      text: 'DARK EYE',
      color: '#EEEE79',
    },
  },
};
const numbers = Math.floor(Math.random()*1000);
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const data = {
  labels,
  datasets: [
    {
      label: 'User Matched',
      data: labels.map(() => numbers),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Corporate Credential Exposed',
      data: labels.map(() => Math.floor(numbers/3) ),
      backgroundColor: '#711A75',
    },
  ],
};

const Chart = () => {
  return  (          
  <div>
    <Bar options={options} data={data} />
  </div>
  )
}



export default Chart;