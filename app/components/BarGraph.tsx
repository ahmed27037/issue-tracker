import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js/auto';

const BarGraph = () => {
  const [data, setData] = useState({
    labels: ['OPEN', 'IN_PROGRESS', 'CLOSED'],
    datasets: [
      {
        label: 'Issue Status',
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
              label: 'Issue Status',
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

  const options: ChartOptions<'bar'> = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return ` ${tooltipItem.label}: ${tooltipItem.formattedValue}`;
          },
        },
      },
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ minHeight: '440px', width: '42%' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGraph;
