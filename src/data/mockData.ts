import { stockDatabase } from './stockDatabase';

export interface Stock {
  symbol: string;
  name: string;
  currentPrice: number;
  change: number;
  changePercent: number;
  historicalData: number[];
  predictions: {
    oneDay: { price: number; confidence: number };
    oneWeek: { price: number; confidence: number };
    oneMonth: { price: number; confidence: number };
  };
}

// Generate realistic stock data
const generateHistoricalData = (basePrice: number, volatility: number = 0.02): number[] => {
  const data: number[] = [];
  let currentPrice = basePrice;
  
  for (let i = 0; i < 30; i++) {
    const change = (Math.random() - 0.5) * volatility * currentPrice;
    currentPrice += change;
    data.push(Math.max(0, currentPrice));
  }
  
  return data;
};

const generatePredictions = (currentPrice: number) => {
  const oneDayChange = (Math.random() - 0.5) * 0.05;
  const oneWeekChange = (Math.random() - 0.5) * 0.15;
  const oneMonthChange = (Math.random() - 0.5) * 0.25;
  
  return {
    oneDay: {
      price: currentPrice * (1 + oneDayChange),
      confidence: Math.floor(Math.random() * 40) + 60 // 60-100%
    },
    oneWeek: {
      price: currentPrice * (1 + oneWeekChange),
      confidence: Math.floor(Math.random() * 30) + 50 // 50-80%
    },
    oneMonth: {
      price: currentPrice * (1 + oneMonthChange),
      confidence: Math.floor(Math.random() * 25) + 40 // 40-65%
    }
  };
};

// Generate realistic price data based on market cap and sector
const generateRealisticPrice = (marketCap: string, sector: string): number => {
  const capValue = parseFloat(marketCap.replace(/[TB]/g, ''));
  const isTrillions = marketCap.includes('T');
  const isBillions = marketCap.includes('B');
  
  let basePrice = 100;
  
  if (isTrillions) {
    basePrice = Math.random() * 200 + 150; // $150-$350 for trillion dollar companies
  } else if (isBillions) {
    if (capValue > 500) {
      basePrice = Math.random() * 150 + 100; // $100-$250 for large caps
    } else if (capValue > 100) {
      basePrice = Math.random() * 100 + 50; // $50-$150 for mid caps
    } else {
      basePrice = Math.random() * 50 + 10; // $10-$60 for smaller caps
    }
  }
  
  // Sector adjustments
  if (sector === 'Technology') basePrice *= 1.2;
  if (sector === 'Healthcare') basePrice *= 1.1;
  if (sector === 'Financial') basePrice *= 0.9;
  if (sector === 'Energy') basePrice *= 0.8;
  
  return Math.round(basePrice * 100) / 100;
};

// Generate mock stock data for all stocks in database
export const mockStocks: { [key: string]: Stock } = {};

Object.entries(stockDatabase).forEach(([symbol, info]) => {
  const currentPrice = generateRealisticPrice(info.marketCap, info.sector);
  const changePercent = (Math.random() - 0.5) * 8; // -4% to +4%
  const change = (currentPrice * changePercent) / 100;
  
  mockStocks[symbol] = {
    symbol,
    name: info.name,
    currentPrice,
    change,
    changePercent,
    historicalData: generateHistoricalData(currentPrice * 0.95),
    predictions: generatePredictions(currentPrice)
  };
});

export const stockSymbols = Object.keys(stockDatabase);

// Generate predicted data for charts
export const generatePredictedData = (currentPrice: number): number[] => {
  const data: number[] = [];
  let price = currentPrice;
  
  for (let i = 0; i < 7; i++) {
    const change = (Math.random() - 0.5) * 0.03;
    price *= (1 + change);
    data.push(Math.max(0, price));
  }
  
  return data;
};