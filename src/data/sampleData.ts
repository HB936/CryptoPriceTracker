import { CryptoAsset } from "../features/cryptoSlice";

const sampleCryptoData: CryptoAsset[] = [
  {
    id: 'btc',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 66500,
    percent1h: 0.5,
    percent24h: -1.2,
    percent7d: 3.4,
    marketCap: 1300000000000,
    volume24h: 35000000000,
    circulatingSupply: 19300000,
    maxSupply: 21000000,
    chart: [66500, 67000, 66000, 65500, 66000, 67000, 67500], // chart data for 7 days
  },
  {
    id: 'eth',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9DgiYDVXJR1xSARBdsbtKgob31gOiYh7SvA&s',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3200,
    percent1h: -0.2,
    percent24h: 2.3,
    percent7d: 5.1,
    marketCap: 380000000000,
    volume24h: 18000000000,
    circulatingSupply: 120000000,
    maxSupply: null,
    chart: [3200, 3250, 3100, 3000, 3100, 3200, 3300], // chart data for 7 days
  },
  {
    id: 'usdt',
    logo: 'https://cdn.worldvectorlogo.com/logos/tether-1.svg',
    name: 'Tether',
    symbol: 'USDT',
    price: 1,
    percent1h: 0,
    percent24h: 0,
    percent7d: 0,
    marketCap: 100000000000,
    volume24h: 45000000000,
    circulatingSupply: 97000000000,
    maxSupply: null,
    chart: [1, 1, 1, 1, 1, 1, 1], // chart data for 7 days (constant value)
  },
  {
    id: 'bnb',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP9cUvoCvmCXO4pNHvnREHBCKW30U-BVxKfg&s',
    name: 'BNB',
    symbol: 'BNB',
    price: 540,
    percent1h: 1.1,
    percent24h: -0.8,
    percent7d: 2.6,
    marketCap: 82000000000,
    volume24h: 2200000000,
    circulatingSupply: 153000000,
    maxSupply: 200000000,
    chart: [540, 550, 530, 520, 530, 540, 550], // chart data for 7 days
  },
  {
    id: 'xrp',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStEx8l1lrrq1h7ap3moMYOl-dmeNzfi3HTOw&s',
    name: 'XRP',
    symbol: 'XRP',
    price: 0.55,
    percent1h: -0.1,
    percent24h: -0.9,
    percent7d: 1.8,
    marketCap: 30000000000,
    volume24h: 1400000000,
    circulatingSupply: 55000000000,
    maxSupply: 100000000000,
    chart: [0.55, 0.56, 0.53, 0.52, 0.54, 0.55, 0.57], // chart data for 7 days
  },
];

export default sampleCryptoData;
