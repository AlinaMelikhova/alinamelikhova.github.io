'use client';

import cn from 'classnames';
import styles from './line-chart.module.css';
import React from 'react';
import { STEPS } from './config';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const generateMonths = (): string[] => {
  const months = [];
  const startDate = new Date(2021, 0);
  const endDate = new Date(2024, 6);

  while (startDate <= endDate) {
    months.push(
      startDate.toLocaleString('default', { month: 'long', year: 'numeric' })
    );
    startDate.setMonth(startDate.getMonth() + 1);
  }

  return months;
};

export const LineChart: React.FC = () => {
  const months = generateMonths();

  const data: ChartData<'line'> = {
    labels: months,
    datasets: [
      {
        label: 'Steps',
        data: STEPS,
        fill: 'origin',
        backgroundColor: '#FDFAE4',
        borderColor: '#FBED69',
        borderWidth: 1,
        pointBorderWidth: 8,
        pointHoverRadius: 13,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    scales: {
      x: {
        backgroundColor: '#FDFAE4',
        ticks: {
          color: '#737576',
          autoSkip: false,
          maxRotation: 90,
          minRotation: 90,
        },
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: 'black',
        titleFont: { family: 'Inter', size: 14 },
        titleSpacing: 1,
        bodyColor: 'black',
        bodyFont: { family: 'Inter', size: 14 },
        bodySpacing: 1,
        borderWidth: 0.5,
        borderColor: 'rgba(128, 128, 128, 0.5)',
        padding: 15,
        displayColors: false,
        callbacks: {
          label: (context) => `${context.parsed.y} steps`,
        },
      },
    },
    elements: {
      line: {
        tension: 0.3,
      },
    },
  };

  return <Line className={cn(styles.root)} data={data} options={options} />;
};
