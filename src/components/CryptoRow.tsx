import { CryptoAsset } from '../features/cryptoSlice';
import ChartComponent from './ChartComponent';

function CryptoRow({ asset }: { asset: CryptoAsset }) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-left">
        <img src={asset.logo} alt={asset.name} className="h-6 w-6" />
      </td>
      <td className="py-3 px-6 text-left">{asset.name}</td>
      <td className="py-3 px-6 text-center">{asset.symbol}</td>
      <td className="py-3 px-6 text-center">${asset.price.toFixed(2)}</td>
      <td className={`py-3 px-6 text-center ${asset.percent1h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {asset.percent1h.toFixed(2)}%
      </td>
      <td className={`py-3 px-6 text-center ${asset.percent24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {asset.percent24h.toFixed(2)}%
      </td>
      <td className={`py-3 px-6 text-center ${asset.percent7d >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {asset.percent7d.toFixed(2)}%
      </td>
      <td className="py-3 px-6 text-center">${(asset.marketCap / 1e9).toFixed(2)}B</td>
      <td className="py-3 px-6 text-center">${(asset.volume24h / 1e9).toFixed(2)}B</td>
      <td className="py-3 px-6 text-center">{asset.circulatingSupply.toLocaleString()}</td>
      <td className="py-3 px-6 text-center">{asset.maxSupply ? asset.maxSupply.toLocaleString() : '∞'}</td>
      <td className="py-3 px-6 text-center">
        <ChartComponent data={asset.chart} width={100} height={50} />  {/* Add chart component with width & height */}
      </td>
    </tr>
  );
}

export default CryptoRow;
