import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { format, subDays } from 'date-fns';

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

interface StockChartProps {
  symbol: string;
  historicalData: number[];
  predictedData: number[];
}

export default function StockChart({ symbol, historicalData, predictedData }: StockChartProps) {
  const generateLabels = () => {
    const labels: string[] = [];
    const totalDays = historicalData.length + predictedData.length;
    
    for (let i = totalDays - 1; i >= 0; i--) {
      labels.push(format(subDays(new Date(), i), 'MMM dd'));
    }
    
    return labels;
  };

  const labels = generateLabels();
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Historical Prices',
        data: [...historicalData, ...new Array(predictedData.length).fill(null)],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 6,
        tension: 0.1,
        fill: true,
      },
      {
        label: 'Predicted Prices',
        data: [...new Array(historicalData.length - 1).fill(null), historicalData[historicalData.length - 1], ...predictedData],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderWidth: 2,
        borderDash: [5, 5],
        pointRadius: 0,
        pointHoverRadius: 6,
        tension: 0.1,
        fill: true,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `${symbol} Price Prediction`,
        font: {
          size: 16,
          weight: 'bold' as const
        }
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: $${context.parsed.y.toFixed(2)}`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(156, 163, 175, 0.2)',
        }
      },
      y: {
        grid: {
          color: 'rgba(156, 163, 175, 0.2)',
        },
        ticks: {
          callback: function(value: any) {
            return '$' + value.toFixed(2);
          }
        }
      }
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
      intersect: false
    }
  };

  return (
    <div className="h-96 w-full">
      <Line data={data} options={options} />
    </div>
  );
}