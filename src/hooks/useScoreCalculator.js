import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFactor } from '../store/slices/simulatorSlice';
import { addScoreToHistory } from '../store/slices/historySlice';
import { calculateCreditScore } from '../utils/calculations';

export const useScoreCalculator = () => {
  const dispatch = useDispatch();
  const factors = useSelector(state => state.simulator.factors);
  const currentScore = useSelector(state => state.simulator.currentScore);

  const updateScore = useCallback((factor, value) => {
    dispatch(updateFactor({ factor, value }));
    
    const newFactors = { ...factors, [factor]: value };
    const newScore = calculateCreditScore(newFactors);
    
    // Add to history if score changed significantly (more than 5 points)
    if (Math.abs(newScore - currentScore) > 5) {
      dispatch(addScoreToHistory({
        score: newScore,
        factors: newFactors
      }));
    }
  }, [dispatch, factors, currentScore]);

  return {
    factors,
    currentScore,
    updateScore
  };
};
