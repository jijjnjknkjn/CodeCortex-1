import React from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

interface MarketData {
  name: string;
  value: number;
  change: number;
}

export default function MarketOverview() {
  const marketIndices: MarketData[] = [
    { name: 'S&P 500', value: 4247.81, change: 1.2 },
    { name: 'NASDAQ', value: 13087.44, change: -0.8 },
    { name: 'DOW JONES', value: 33592.88, change: 0.5 }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center mb-4">
        <Activity className="h-5 w-5 text-blue-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">Market Overview</h3>
      </div>

      <div className="space-y-4">
        {marketIndices.map((index) => (
          <div key={index.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">{index.name}</h4>
              <p className="text-lg font-semibold text-gray-800">{index.value.toLocaleString()}</p>
            </div>
            <div className={`flex items-center px-2 py-1 rounded-full text-sm font-medium ${
              index.change >= 0 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {index.change >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
              <span className="ml-1">{index.change >= 0 ? '+' : ''}{index.change.toFixed(1)}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}