import React, { useState } from 'react';
import { BarChart3, Search, TrendingUp, Brain } from 'lucide-react';
import StockChart from './components/StockChart';
import StockCard from './components/StockCard';
import SearchBar from './components/SearchBar';
import MarketOverview from './components/MarketOverview';
import PredictionPanel from './components/PredictionPanel';
import { mockStocks, generatePredictedData } from './data/mockData';
import { stockDatabase } from './data/stockDatabase';

function App() {
  const [selectedStock, setSelectedStock] = useState('AAPL');
  const [watchlist, setWatchlist] = useState(['AAPL', 'TSLA', 'GOOGL', 'MSFT']);

  const handleSearch = (symbol: string) => {
    if (mockStocks[symbol]) {
      setSelectedStock(symbol);
      if (!watchlist.includes(symbol)) {
        setWatchlist([...watchlist, symbol]);
      }
    } else {
      alert(`Stock symbol "${symbol}" not found. Try searching for companies like Apple, Microsoft, Tesla, or their symbols.`);
    }
  };

  const selectedStockData = mockStocks[selectedStock];
  const predictedData = generatePredictedData(selectedStockData.currentPrice);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">StockPredict AI</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-80">
                <SearchBar onSearch={handleSearch} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Chart and Analysis */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stock Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <StockChart
                symbol={selectedStock}
                historicalData={selectedStockData.historicalData}
                predictedData={predictedData}
              />
            </div>

            {/* Watchlist */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Your Watchlist</h3>
                <span className="ml-2 text-sm text-gray-500">({Object.keys(stockDatabase).length}+ stocks available)</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {watchlist.map((symbol) => {
                  const stock = mockStocks[symbol];
                  const prediction = stock.predictions.oneDay;
                  return (
                    <StockCard
                      key={symbol}
                      symbol={stock.symbol}
                      name={stock.name}
                      currentPrice={stock.currentPrice}
                      change={stock.change}
                      changePercent={stock.changePercent}
                      prediction={{
                        price: prediction.price,
                        confidence: prediction.confidence,
                        direction: prediction.price > stock.currentPrice ? 'up' : 'down'
                      }}
                      onClick={() => setSelectedStock(symbol)}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Market Info and Predictions */}
          <div className="space-y-6">
            {/* Market Overview */}
            <MarketOverview />

            {/* AI Predictions Panel */}
            <PredictionPanel
              symbol={selectedStock}
              currentPrice={selectedStockData.currentPrice}
              predictions={selectedStockData.predictions}
            />

            {/* Features */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <Brain className="h-5 w-5 text-purple-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">AI Features</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium text-blue-900">Comprehensive Stock Database</p>
                    <p className="text-sm text-blue-700">Search from {Object.keys(stockDatabase).length}+ major stocks by name or symbol</p>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium text-green-900">Smart Search</p>
                    <p className="text-sm text-green-700">Find stocks by company name, symbol, or sector</p>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-purple-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium text-purple-900">AI Predictions</p>
                    <p className="text-sm text-purple-700">Machine learning powered price forecasts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <BarChart3 className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-gray-900 font-semibold">StockPredict AI</span>
            </div>
            <p className="text-sm text-gray-600 text-center md:text-right max-w-md">
              This platform supports {Object.keys(stockDatabase).length}+ major stocks. All predictions are for educational purposes only. 
              Not financial advice. Always consult professionals before investing.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;