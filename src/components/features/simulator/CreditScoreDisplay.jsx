import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { SCORE_RANGES } from '../../../utils/constants';
import { scoreChangeAnimation } from '../../../utils/animations';

const CreditScoreDisplay = () => {
  const score = useSelector(state => state.simulator.currentScore);
  
  const getScoreRange = (score) => {
    return Object.entries(SCORE_RANGES).find(
      ([_, range]) => score >= range.min && score <= range.max
    )[0];
  };

  const scoreRange = getScoreRange(score);
  const scoreColors = {
    excellent: 'text-green-500',
    good: 'text-blue-500',
    fair: 'text-yellow-500',
    poor: 'text-red-500'
  };

  return (
    <motion.div 
      className="text-center p-8"
      {...scoreChangeAnimation}
    >
      <motion.div 
        className={`text-6xl font-bold ${scoreColors[scoreRange]}`}
        key={score}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {score}
      </motion.div>
      <div className="text-xl mt-2">{SCORE_RANGES[scoreRange].label}</div>
    </motion.div>
  );
};