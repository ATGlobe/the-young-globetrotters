import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Purchase } from '../types';

interface AppState {
  purchases: Purchase[];
  addPurchase: (purchase: Purchase) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      purchases: [],
      addPurchase: (purchase) => set((state) => ({
        purchases: [purchase, ...state.purchases]
      })),
    }),
    {
      name: 'axel-tino-storage',
    }
  )
);
