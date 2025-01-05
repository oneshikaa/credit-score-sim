import { createSlice } from '@reduxjs/toolkit';

const historySlice = createSlice({
  name: 'history',
  initialState: {
    scoreHistory: [],
    lastUpdate: null
  },
  reducers: {
    addScoreToHistory: (state, action) => {
      state.scoreHistory.push({
        score: action.payload.score,
        factors: action.payload.factors,
        timestamp: new Date().toISOString()
      });
      state.lastUpdate = new Date().toISOString();
    },
    clearHistory: (state) => {
      state.scoreHistory = [];
      state.lastUpdate = null;
    }
  }
});
