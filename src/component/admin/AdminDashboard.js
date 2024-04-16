import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar,Pie } from 'react-chartjs-2';
import { Card } from 'antd';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
 const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

 const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [300,150,400,600,500,800,700],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
     
    },
    {
      label: 'Dataset 2',
      data: [300,150,400,600,500,800,700],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      
    },
  ],
};

 const AdminDashboard=()=> {
  return (
    <div className=' flex'>
    <section>
    
  <Bar options={options} data={data} />
 
  </section>
  <section>
  
    <Pie options={options} data={data}/>
   
  </section>

  </div>)
}

export default AdminDashboard;