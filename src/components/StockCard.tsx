import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StockCardProps {
  symbol: string;
  name: string;
  currentPrice: number;
  change: number;
  changePercent: number;
  prediction: {
    price: number;
    confidence: number;
    direction: 'up' | 'down';
  };
  onClick: () => void;
}

export default function StockCard({ 
  symbol, 
  name, 
  currentPrice, 
  change, 
  changePercent,
  prediction,
  onClick 
}: StockCardProps) {
  const isPositive = change >= 0;
  const isPredictionUp = prediction.direction === 'up';

  return (
    <div 
      onClick={onClick}
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer hover:border-blue-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{symbol}</h3>
          <p className="text-sm text-gray-600">{name}</p>
        </div>
        <div className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${
          isPredictionUp 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {isPredictionUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          <span className="ml-1">{prediction.confidence}% confidence</span>
        </div>
      </div>

      <div className="flex justify-between items-end">
        <div>
          <p className="text-2xl font-bold text-gray-900">
            ${currentPrice.toFixed(2)}
          </p>
          <p className={`text-sm font-medium ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}>
            {isPositive ? '+' : ''}${change.toFixed(2)} ({isPositive ? '+' : ''}{changePercent.toFixed(2)}%)
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500">Predicted Price</p>
          <p className={`text-lg font-semibold ${
            isPredictionUp ? 'text-green-600' : 'text-red-600'
          }`}>
            ${prediction.price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}