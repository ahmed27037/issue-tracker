import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const PieChart = () => {
  const [data, setData] = useState({
    labels: ['OPEN', 'IN_PROGRESS', 'CLOSED'],
    datasets: [
      {
        data: [0, 0, 0],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  });

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await axios.get('/api/issues');
        const issues = response.data;

        const issueStatusCount = {
          OPEN: 0,
          IN_PROGRESS: 0,
          CLOSED: 0,
        };

        issues.forEach((issue: { status: 'OPEN' | 'IN_PROGRESS' | 'CLOSED' }) => {
          if (issue.status in issueStatusCount) {
            issueStatusCount[issue.status]++;
          }
        });

        setData({
          labels: ['OPEN', 'IN_PROGRESS', 'CLOSED'],
          datasets: [
            {
              data: [
                issueStatusCount.OPEN,
                issueStatusCount.IN_PROGRESS,
                issueStatusCount.CLOSED,
              ],
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
              hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
          ],
        });
      } catch (error) {
        console.error('An error occurred while fetching issues:', error);
      }
    };

    fetchChartData();
  }, []);

  const options: ChartOptions<'doughnut'> = {
    plugins: {
      legend: {
        display: true,
      },
    },
    maintainAspectRatio: false, // This ensures that the chart doesn't maintain a fixed aspect ratio
  };

  return (
    <div style={{ minHeight: '440px', width: '42%' }}>
  <Doughnut data={data} options={options} />
  </div>
  )
};

export default PieChart;
