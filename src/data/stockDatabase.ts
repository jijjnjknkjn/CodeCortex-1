export interface StockInfo {
  symbol: string;
  name: string;
  sector: string;
  marketCap: string;
}

export const stockDatabase: { [key: string]: StockInfo } = {
  // Technology
  'AAPL': { symbol: 'AAPL', name: 'Apple Inc.', sector: 'Technology', marketCap: '3.0T' },
  'MSFT': { symbol: 'MSFT', name: 'Microsoft Corporation', sector: 'Technology', marketCap: '2.8T' },
  'GOOGL': { symbol: 'GOOGL', name: 'Alphabet Inc.', sector: 'Technology', marketCap: '1.7T' },
  'AMZN': { symbol: 'AMZN', name: 'Amazon.com Inc.', sector: 'Technology', marketCap: '1.5T' },
  'TSLA': { symbol: 'TSLA', name: 'Tesla Inc.', sector: 'Automotive', marketCap: '800B' },
  'META': { symbol: 'META', name: 'Meta Platforms Inc.', sector: 'Technology', marketCap: '750B' },
  'NVDA': { symbol: 'NVDA', name: 'NVIDIA Corporation', sector: 'Technology', marketCap: '1.8T' },
  'NFLX': { symbol: 'NFLX', name: 'Netflix Inc.', sector: 'Entertainment', marketCap: '180B' },
  'ADBE': { symbol: 'ADBE', name: 'Adobe Inc.', sector: 'Technology', marketCap: '220B' },
  'CRM': { symbol: 'CRM', name: 'Salesforce Inc.', sector: 'Technology', marketCap: '200B' },
  'ORCL': { symbol: 'ORCL', name: 'Oracle Corporation', sector: 'Technology', marketCap: '300B' },
  'IBM': { symbol: 'IBM', name: 'International Business Machines', sector: 'Technology', marketCap: '130B' },
  'INTC': { symbol: 'INTC', name: 'Intel Corporation', sector: 'Technology', marketCap: '200B' },
  'AMD': { symbol: 'AMD', name: 'Advanced Micro Devices', sector: 'Technology', marketCap: '230B' },
  'UBER': { symbol: 'UBER', name: 'Uber Technologies Inc.', sector: 'Technology', marketCap: '120B' },
  'LYFT': { symbol: 'LYFT', name: 'Lyft Inc.', sector: 'Technology', marketCap: '15B' },
  'SNAP': { symbol: 'SNAP', name: 'Snap Inc.', sector: 'Technology', marketCap: '25B' },
  'TWTR': { symbol: 'TWTR', name: 'Twitter Inc.', sector: 'Technology', marketCap: '40B' },
  'SPOT': { symbol: 'SPOT', name: 'Spotify Technology SA', sector: 'Entertainment', marketCap: '30B' },
  'ZOOM': { symbol: 'ZM', name: 'Zoom Video Communications', sector: 'Technology', marketCap: '25B' },

  // Financial
  'JPM': { symbol: 'JPM', name: 'JPMorgan Chase & Co.', sector: 'Financial', marketCap: '450B' },
  'BAC': { symbol: 'BAC', name: 'Bank of America Corp.', sector: 'Financial', marketCap: '250B' },
  'WFC': { symbol: 'WFC', name: 'Wells Fargo & Company', sector: 'Financial', marketCap: '180B' },
  'GS': { symbol: 'GS', name: 'Goldman Sachs Group Inc.', sector: 'Financial', marketCap: '120B' },
  'MS': { symbol: 'MS', name: 'Morgan Stanley', sector: 'Financial', marketCap: '150B' },
  'V': { symbol: 'V', name: 'Visa Inc.', sector: 'Financial', marketCap: '500B' },
  'MA': { symbol: 'MA', name: 'Mastercard Inc.', sector: 'Financial', marketCap: '380B' },
  'PYPL': { symbol: 'PYPL', name: 'PayPal Holdings Inc.', sector: 'Financial', marketCap: '70B' },
  'SQ': { symbol: 'SQ', name: 'Block Inc.', sector: 'Financial', marketCap: '35B' },
  'AXP': { symbol: 'AXP', name: 'American Express Company', sector: 'Financial', marketCap: '130B' },

  // Healthcare
  'JNJ': { symbol: 'JNJ', name: 'Johnson & Johnson', sector: 'Healthcare', marketCap: '450B' },
  'PFE': { symbol: 'PFE', name: 'Pfizer Inc.', sector: 'Healthcare', marketCap: '200B' },
  'UNH': { symbol: 'UNH', name: 'UnitedHealth Group Inc.', sector: 'Healthcare', marketCap: '500B' },
  'MRNA': { symbol: 'MRNA', name: 'Moderna Inc.', sector: 'Healthcare', marketCap: '60B' },
  'ABBV': { symbol: 'ABBV', name: 'AbbVie Inc.', sector: 'Healthcare', marketCap: '280B' },
  'TMO': { symbol: 'TMO', name: 'Thermo Fisher Scientific', sector: 'Healthcare', marketCap: '200B' },
  'DHR': { symbol: 'DHR', name: 'Danaher Corporation', sector: 'Healthcare', marketCap: '180B' },
  'BMY': { symbol: 'BMY', name: 'Bristol Myers Squibb', sector: 'Healthcare', marketCap: '120B' },
  'AMGN': { symbol: 'AMGN', name: 'Amgen Inc.', sector: 'Healthcare', marketCap: '150B' },
  'GILD': { symbol: 'GILD', name: 'Gilead Sciences Inc.', sector: 'Healthcare', marketCap: '100B' },

  // Consumer
  'KO': { symbol: 'KO', name: 'Coca-Cola Company', sector: 'Consumer Goods', marketCap: '260B' },
  'PEP': { symbol: 'PEP', name: 'PepsiCo Inc.', sector: 'Consumer Goods', marketCap: '230B' },
  'WMT': { symbol: 'WMT', name: 'Walmart Inc.', sector: 'Retail', marketCap: '400B' },
  'HD': { symbol: 'HD', name: 'Home Depot Inc.', sector: 'Retail', marketCap: '350B' },
  'MCD': { symbol: 'MCD', name: 'McDonald\'s Corporation', sector: 'Consumer Services', marketCap: '200B' },
  'SBUX': { symbol: 'SBUX', name: 'Starbucks Corporation', sector: 'Consumer Services', marketCap: '110B' },
  'NKE': { symbol: 'NKE', name: 'Nike Inc.', sector: 'Consumer Goods', marketCap: '160B' },
  'DIS': { symbol: 'DIS', name: 'Walt Disney Company', sector: 'Entertainment', marketCap: '180B' },
  'COST': { symbol: 'COST', name: 'Costco Wholesale Corp.', sector: 'Retail', marketCap: '250B' },
  'TGT': { symbol: 'TGT', name: 'Target Corporation', sector: 'Retail', marketCap: '70B' },

  // Energy & Industrial
  'XOM': { symbol: 'XOM', name: 'Exxon Mobil Corporation', sector: 'Energy', marketCap: '450B' },
  'CVX': { symbol: 'CVX', name: 'Chevron Corporation', sector: 'Energy', marketCap: '300B' },
  'BA': { symbol: 'BA', name: 'Boeing Company', sector: 'Aerospace', marketCap: '130B' },
  'CAT': { symbol: 'CAT', name: 'Caterpillar Inc.', sector: 'Industrial', marketCap: '150B' },
  'GE': { symbol: 'GE', name: 'General Electric Company', sector: 'Industrial', marketCap: '120B' },
  'MMM': { symbol: 'MMM', name: '3M Company', sector: 'Industrial', marketCap: '60B' },
  'HON': { symbol: 'HON', name: 'Honeywell International', sector: 'Industrial', marketCap: '140B' },
  'LMT': { symbol: 'LMT', name: 'Lockheed Martin Corp.', sector: 'Aerospace', marketCap: '110B' },
  'RTX': { symbol: 'RTX', name: 'Raytheon Technologies', sector: 'Aerospace', marketCap: '130B' },
  'F': { symbol: 'F', name: 'Ford Motor Company', sector: 'Automotive', marketCap: '50B' },
  'GM': { symbol: 'GM', name: 'General Motors Company', sector: 'Automotive', marketCap: '55B' },

  // Crypto & Fintech
  'COIN': { symbol: 'COIN', name: 'Coinbase Global Inc.', sector: 'Financial', marketCap: '25B' },
  'HOOD': { symbol: 'HOOD', name: 'Robinhood Markets Inc.', sector: 'Financial', marketCap: '8B' },
  'SOFI': { symbol: 'SOFI', name: 'SoFi Technologies Inc.', sector: 'Financial', marketCap: '7B' },
  'AFRM': { symbol: 'AFRM', name: 'Affirm Holdings Inc.', sector: 'Financial', marketCap: '5B' },

  // Emerging Tech
  'PLTR': { symbol: 'PLTR', name: 'Palantir Technologies', sector: 'Technology', marketCap: '35B' },
  'SNOW': { symbol: 'SNOW', name: 'Snowflake Inc.', sector: 'Technology', marketCap: '50B' },
  'DDOG': { symbol: 'DDOG', name: 'Datadog Inc.', sector: 'Technology', marketCap: '35B' },
  'CRWD': { symbol: 'CRWD', name: 'CrowdStrike Holdings', sector: 'Technology', marketCap: '40B' },
  'ZS': { symbol: 'ZS', name: 'Zscaler Inc.', sector: 'Technology', marketCap: '20B' },
  'OKTA': { symbol: 'OKTA', name: 'Okta Inc.', sector: 'Technology', marketCap: '12B' },
  'TWLO': { symbol: 'TWLO', name: 'Twilio Inc.', sector: 'Technology', marketCap: '10B' },
  'DOCU': { symbol: 'DOCU', name: 'DocuSign Inc.', sector: 'Technology', marketCap: '8B' },
};

// Create reverse lookup for company names
export const companyNameToSymbol: { [key: string]: string } = {};
Object.values(stockDatabase).forEach(stock => {
  const normalizedName = stock.name.toLowerCase();
  companyNameToSymbol[normalizedName] = stock.symbol;
  
  // Add variations without common suffixes
  const nameWithoutSuffix = normalizedName
    .replace(/\s+(inc\.?|corp\.?|corporation|company|co\.?|ltd\.?|llc|sa)$/i, '')
    .trim();
  if (nameWithoutSuffix !== normalizedName) {
    companyNameToSymbol[nameWithoutSuffix] = stock.symbol;
  }
});

export const getAllStockSymbols = (): string[] => {
  return Object.keys(stockDatabase);
};

export const searchStocks = (query: string): string[] => {
  const normalizedQuery = query.toLowerCase().trim();
  
  if (!normalizedQuery) return [];
  
  const results: string[] = [];
  
  // First, check for exact symbol matches
  Object.keys(stockDatabase).forEach(symbol => {
    if (symbol.toLowerCase().startsWith(normalizedQuery)) {
      results.push(symbol);
    }
  });
  
  // Then check for company name matches
  Object.values(stockDatabase).forEach(stock => {
    const normalizedName = stock.name.toLowerCase();
    if (normalizedName.includes(normalizedQuery) && !results.includes(stock.symbol)) {
      results.push(stock.symbol);
    }
  });
  
  // Check sector matches
  Object.values(stockDatabase).forEach(stock => {
    const normalizedSector = stock.sector.toLowerCase();
    if (normalizedSector.includes(normalizedQuery) && !results.includes(stock.symbol)) {
      results.push(stock.symbol);
    }
  });
  
  return results.slice(0, 10); // Limit to 10 results
};

export const findStockByNameOrSymbol = (query: string): string | null => {
  const normalizedQuery = query.toLowerCase().trim();
  
  // Check if it's a direct symbol match
  const upperQuery = query.toUpperCase();
  if (stockDatabase[upperQuery]) {
    return upperQuery;
  }
  
  // Check company name lookup
  if (companyNameToSymbol[normalizedQuery]) {
    return companyNameToSymbol[normalizedQuery];
  }
  
  // Fuzzy search for partial matches
  for (const [name, symbol] of Object.entries(companyNameToSymbol)) {
    if (name.includes(normalizedQuery) || normalizedQuery.includes(name)) {
      return symbol;
    }
  }
  
  return null;
};