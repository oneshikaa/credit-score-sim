import { configureStore } from '@reduxjs/toolkit';
import { simulatorSlice } from './slices/simulatorSlice';
import { historySlice } from './slices/historySlice';

export const store = configureStore({
  reducer: {
    simulator: simulatorSlice.reducer,
    history: historySlice.reducer
  }
});

export const { updateFactor, resetSimulation, setSelectedFactor } = simulatorSlice.actions;
export const { addScoreToHistory, clearHistory } = historySlice.actions;