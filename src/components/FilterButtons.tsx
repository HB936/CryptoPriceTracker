import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/cryptoSlice';
import { RootState } from '../app/store';

function FilterButtons() {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.crypto.filter);

  return (
    <div className="flex justify-center gap-4 my-6">
      <button
        className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => dispatch(setFilter('all'))}
      >
        All
      </button>
      <button
        className={`px-4 py-2 rounded ${filter === 'topGainers' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
        onClick={() => dispatch(setFilter('topGainers'))}
      >
        Top Gainers
      </button>
      <button
        className={`px-4 py-2 rounded ${filter === 'topLosers' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
        onClick={() => dispatch(setFilter('topLosers'))}
      >
        Top Losers
      </button>
    </div>
  );
}

export default FilterButtons;
