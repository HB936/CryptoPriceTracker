import CryptoTable from './components/CryptoTable';
import FilterButtons from './components/FilterButtons';
import useSimulateWebSocket from './hooks/useSimulateWebSocket';

function App() {
  useSimulateWebSocket();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Crypto Price Tracker 🚀</h1>
      <FilterButtons />
      <CryptoTable />
    </div>
  );
}

export default App;
