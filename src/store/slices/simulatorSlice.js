import { createSlice } from '@reduxjs/toolkit';
import { calculateCreditScore } from '../../utils/calculations';

const initialState = {
  currentScore: 650,
  factors: {
    paymentHistory: 100,
    creditUtilization: 30,
    creditAge: 5,
    totalAccounts: 3,
    hardInquiries: 1
  },
  recommendations: [],
  selectedFactor: null
};

export const simulatorSlice = createSlice({
  name: 'simulator',
  initialState,
  reducers: {
    updateFactor: (state, action) => {
      const { factor, value } = action.payload;
      state.factors[factor] = value;
      state.currentScore = calculateCreditScore(state.factors);
      state.recommendations = generateRecommendations(state.factors);
    },
    resetSimulation: (state) => {
      return initialState;
    },
    setSelectedFactor: (state, action) => {
      state.selectedFactor = action.payload;
    }
  }
});
