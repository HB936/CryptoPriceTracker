import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateAllAssets } from "../features/cryptoSlice";
import { AppDispatch } from "../app/store";
import sampleCryptoData from "../data/sampleData";

function randomChange(value: number) {
  const change = (Math.random() * 2 - 1) * 0.05;
  return value * (1 + change);
}

function useSimulateWebSocket() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedAssets = sampleCryptoData.map(asset => ({
        ...asset,
        price: randomChange(asset.price),
        percent1h: randomChange(asset.percent1h),
        percent24h: randomChange(asset.percent24h),
        volume24h: randomChange(asset.volume24h),
      }));

      dispatch(updateAllAssets(updatedAssets));
    }, 2000);

    return () => clearInterval(interval);
  }, [dispatch]);
}

export default useSimulateWebSocket;
