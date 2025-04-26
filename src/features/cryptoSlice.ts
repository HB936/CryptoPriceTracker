import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import sampleCryptoData from '../data/sampleData';

export interface CryptoAsset {
  id: string;
  logo: string;
  name: string;
  symbol: string;
  price: number;
  percent1h: number;
  percent24h: number;
  percent7d: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  maxSupply: number | null;
  chart:  number[];
}

interface CryptoState {
  assets: CryptoAsset[];
  filter: 'all' | 'topGainers' | 'topLosers';
}

const initialFilter = (localStorage.getItem('filter') as 'all' | 'topGainers' | 'topLosers') || 'all';

const initialState: CryptoState = {
  assets: sampleCryptoData,
  filter: initialFilter,
};

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateAllAssets: (state, action: PayloadAction<CryptoAsset[]>) => {
      state.assets = action.payload;
    },
    setFilter: (state, action: PayloadAction<'all' | 'topGainers' | 'topLosers'>) => {
      state.filter = action.payload;
      localStorage.setItem('filter', action.payload);
    },
  },
});

export const { updateAllAssets, setFilter } = cryptoSlice.actions;
export default cryptoSlice.reducer;
