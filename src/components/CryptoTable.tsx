import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import CryptoRow from './CryptoRow';

function CryptoTable() {
  const { assets, filter } = useSelector((state: RootState) => state.crypto);

  let displayedAssets = assets;
  if (filter === 'topGainers') {
    displayedAssets = [...assets].sort((a, b) => b.percent24h - a.percent24h).slice(0, 5);
  } else if (filter === 'topLosers') {
    displayedAssets = [...assets].sort((a, b) => a.percent24h - b.percent24h).slice(0, 5);
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Logo</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6">Symbol</th>
            <th className="py-3 px-6">Price</th>
            <th className="py-3 px-6">1h %</th>
            <th className="py-3 px-6">24h %</th>
            <th className="py-3 px-6">7d %</th>
            <th className="py-3 px-6">Market Cap</th>
            <th className="py-3 px-6">24h Volume</th>
            <th className="py-3 px-6">Circulating</th>
            <th className="py-3 px-6">Max Supply</th>
            <th className="py-3 px-6">7D Chart</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {displayedAssets.map(asset => (
            <CryptoRow key={asset.id} asset={asset} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CryptoTable;
