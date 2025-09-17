// src/stores/useCounterStore.ts

import { create } from "zustand";

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useCounterStore = create<CounterState>()((set) => ({
  count: 0,
  increment: () => set((state) => ({count: state.count++})),
  decrement: () => set((state) => ({count: state.count--}))
}))

export default useCounterStore;